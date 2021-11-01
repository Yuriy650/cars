import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {OwnerEntity} from "../../model/owner.interface";
import {OwnerService} from "../../owner.service";

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {
  @Output() onAddNewOwner: EventEmitter<OwnerEntity[]> = new EventEmitter<OwnerEntity[]>();
  @Output() onChangeToggle: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() toggle: boolean;
  owners: OwnerEntity[]
  newOwner: OwnerEntity;
  countCars = 0;
  toggleCar: boolean = false
  form = new FormGroup({
    aFirstName: new FormControl(null, [
      Validators.required,
    ]),
    aLastName: new FormControl(null, [
      Validators.required
    ]),
    aMiddleName: new FormControl(null, [
      Validators.required
    ]),
    cars: this.fb.array([])

  })
  constructor(private ownerService: OwnerService, private fb: FormBuilder) {
  }

  get cars() {
    return this.form.controls['cars'] as FormArray;
  }

  ngOnInit(): void {
    this.getOwners();
  }

  addCar() {
    const carForm = new FormGroup({
      stateNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8)
      ]),
      brand: new FormControl('', [
        Validators.required
      ]),
      model: new FormControl('', [
        Validators.required
      ]),
      year: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(4)
      ])
    });
    this.cars.push(carForm)
  }

  deleteCar(carIndex: number) {
    this.cars.removeAt(carIndex)
  }

  getOwners() {
    this.ownerService.getOwners().subscribe(
      results => {
        this.owners = results
      })
  }

  createOwner() {
    this.getOwners()
    this.newOwner = {
      aId: this.owners[this.owners.length - 1].aId + 1,
      aLastName: this.form.value.aLastName,
      aFirstName: this.form.value.aFirstName,
      aMiddleName: this.form.value.aMiddleName,
      aCars: this.form.value.cars
    }
    this.ownerService.addOwner(this.newOwner)
      .subscribe(owner => {
        this.owners.push(owner);
      });
    this.getOwners();
    this.onAddNewOwner.emit(this.owners)
    this.owners.push(this.newOwner);
    this.form.reset()
  }

  getBack() {
    this.toggle = !this.toggle;
    this.onChangeToggle.emit(this.toggle)
  }

  changeToggleCar() {
    this.toggleCar = !this.toggleCar
  }
}
