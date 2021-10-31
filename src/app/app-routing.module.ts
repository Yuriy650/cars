import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OwnerComponent} from "./components/owner/owner.component";
import {AddFormComponent} from "./components/add-form/add-form.component";
import {ListOwnersComponent} from "./components/list-owners/list-owners.component";
import {AddCarComponent} from "./components/add-car/add-car.component";

const routes: Routes = [
  {path: 'owner', component: OwnerComponent},
  {path: 'add-form', component: AddFormComponent},
  {path: 'list', component: ListOwnersComponent},
  {path: 'add-car', component: AddCarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
