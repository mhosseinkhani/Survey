import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutUscomponent } from './AboutUS/AboutUs.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CallMeComponent } from './callMe/CallMe.component';
import { ContactUsComponent } from './ContactUs/ContactUs.component';
import { footerComponeent } from './footer/footer.component';
import { loginComponent } from './Login/login.component';

import { nvbarComponent } from './Navbar/navbar.component';
import { ostadcomponent } from './ostad/ostad.component';
// component declaration steps
//1-create null component
//2-declare component on app module
//3-if need to routing add to routing module
@NgModule({
  declarations: [//all  of component and any pipe , ...
    AppComponent,
    AboutUscomponent,
    ContactUsComponent,
    nvbarComponent,
    footerComponeent,
    CallMeComponent,
    ostadcomponent,
    loginComponent

  ],
  imports: [//register all of modules like ...
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    // register all stuffs for run in modules
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
