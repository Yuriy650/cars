import {Component, OnInit} from '@angular/core';
import {OwnerService} from "../../owner.service";
import {OwnerEntity} from "../../model/owner.interface";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-list-owners',
  templateUrl: './list-owners.component.html',
  styleUrls: ['./list-owners.component.scss']
})
export class ListOwnersComponent implements OnInit {
  owners: OwnerEntity[]=[];
  owner!: OwnerEntity;
  toggle = false;
  toggleShow = true
  aId: number|null = null;
  selectedOwners: OwnerEntity[] = [];
  editOwner: OwnerEntity;
  editOwnerForm: FormGroup;
  constructor(private ownerService: OwnerService) { }

  ngOnInit(): void {
   this.ownerService.getOwners().subscribe(
      results=> {
        this.owners = results
      })

  }
  onClickRow(aId: any) {
    this.aId = aId
  }

  goToAddForm() {
    this.toggle = !this.toggle
  }

  updateOwners(owners: OwnerEntity[]) {
    this.owners = owners
  }



  showOwner() {
    this.toggleShow = true
    this.selectedOwners = this.owners.filter(item=> item.aId === this.aId)
  }

  deleteOwner() {
    this.owners = this.owners.filter(item=>item.aId != this.aId);
    // @ts-ignore
    this.ownerService.deleteOwner(this.aId).subscribe();
  }

  handlerEditOwner() {
    this.editOwner =  this.owners.filter(item=> item.aId === this.aId)[0];
    console.log(this.editOwner);
    this.editOwnerForm = new FormGroup({
      aId: new FormControl(this.editOwner.aId, []),
      aLastName: new FormControl(this.editOwner.aLastName,[
        Validators.required
      ]),
      aFirstName: new FormControl(this.editOwner.aFirstName, [
        Validators.required
      ]),
      aMiddleName: new FormControl(this.editOwner.aMiddleName, [
        Validators.required
      ])
    })
  }
  saveChanges() {
    let index = this.owners.findIndex(item => item.aId === this.editOwnerForm.value.aId);
    this.owners[index].aFirstName = this.editOwnerForm.value.aFirstName;
    this.owners[index].aLastName = this.editOwnerForm.value.aLastName;
    this.owners[index].aMiddleName = this.editOwnerForm.value.aMiddleName;
    this.editOwnerForm.reset()
  }

  cancelOwnerForm() {
    // @ts-ignore
    this.editOwnerForm = null
  }

  closeShow(toggle: boolean) {
    this.toggleShow = toggle
  }

  changeToggle(toggle: boolean) {
    this.toggle = toggle
  }
}
