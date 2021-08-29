import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUscomponent } from './AboutUS/AboutUs.component';
import { CallMeComponent } from './callMe/CallMe.component';
import { ContactUsComponent } from './ContactUs/ContactUs.component';
import { loginComponent } from './Login/login.component';
import { ostadcomponent } from './ostad/ostad.component';

const routes: Routes = [
  {path:'about',component:AboutUscomponent },
  {path:'contact',component:ContactUsComponent},
  {path:'love' ,component:CallMeComponent},
  {path:'ostad',component:ostadcomponent},
  {path:'login',component:loginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
