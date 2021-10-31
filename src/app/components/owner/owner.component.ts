import {Component, Input, OnInit} from '@angular/core';
import {CarEntity, OwnerEntity} from "../../model/owner.interface";

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss']
})
export class OwnerComponent implements OnInit {
  @Input() owner!: OwnerEntity
  @Input() car!: CarEntity
  @Input() selectedOwners!: OwnerEntity[]

  constructor() {
  }

  ngOnInit(): void {

  }

}
