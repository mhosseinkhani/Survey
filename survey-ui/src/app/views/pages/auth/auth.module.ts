import { CommonModule } from '@angular/common';
import { Component, ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { ForgotPasswordComponent } from './forgotPassword/forgot.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        component: LoginComponent,
        data: { returnUrl: window.location.pathname },

      },
      {
        path :'forgot',
        component: ForgotPasswordComponent,
      }
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [AuthComponent],
  declarations: [AuthComponent, LoginComponent,ForgotPasswordComponent],
  providers: [],
})
export class AuthModule {
  static forRoot(): ModuleWithProviders<AuthModule> {
    return {
      ngModule: AuthModule,
      providers: [],
    };
  }
}
