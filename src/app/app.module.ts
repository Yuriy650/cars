import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { OwnerComponent } from './components/owner/owner.component';
import { ListOwnersComponent } from './components/list-owners/list-owners.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { AddFormComponent } from './components/add-form/add-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from '@angular/material/list';
import { AddCarComponent } from './components/add-car/add-car.component';
import { NgxAbstractControlAsModule } from 'ngx-abstract-control-as';
@NgModule({
  declarations: [
    AppComponent,
    OwnerComponent,
    ListOwnersComponent,
    AddFormComponent,
    AddCarComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    RouterModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    MatIconModule,
    BrowserAnimationsModule,
    MatListModule,
    NgxAbstractControlAsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
