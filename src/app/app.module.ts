import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengerComponent } from './passenger/passenger.component';
import { UsDataComponent } from './us-data/us-data.component';
import { ApiDataComponent } from './api-data/api-data.component';

const MyRoute:Routes=[
  {
    path:"",
    component:PassengerComponent
  },
  {
    path:"us_data",
    component:UsDataComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    PassengerComponent,
    UsDataComponent,
    ApiDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(MyRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
