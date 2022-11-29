import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengerComponent } from './passenger/passenger.component';
import { UsDataComponent } from './us-data/us-data.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { ProductComponent } from './product/product.component';

const MyRoute:Routes=[
  {
    path:"",
    component:PassengerComponent
  },
  {
    path:"us_data",
    component:UsDataComponent
  },
  {
    path:"user_info",
    component:UserInfoComponent
  },
  {
    path:"product",
    component:ProductComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    PassengerComponent,
    UsDataComponent,
    UserInfoComponent,
    ProductComponent
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
