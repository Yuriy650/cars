import {Component, OnInit} from '@angular/core';
import {OwnerService} from "./owner.service";
import {OwnerEntity} from "./model/owner.interface";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'cars';
owners: OwnerEntity[]
  constructor() {
  }
  ngOnInit() {

  }
}
