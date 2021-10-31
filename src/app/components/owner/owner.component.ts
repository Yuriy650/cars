import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CarEntity, OwnerEntity} from "../../model/owner.interface";

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss']
})
export class OwnerComponent implements OnInit {
  @Input() owner: OwnerEntity
  @Input() car: CarEntity
  @Input() selectedOwners: OwnerEntity[]
  @Input() toggleShow: boolean;
  @Output() onChangeToggleShow: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit(): void {

  }

  closeForm() {
    this.toggleShow = !this.toggleShow;
    this.onChangeToggleShow.emit(this.toggleShow)
  }
}
