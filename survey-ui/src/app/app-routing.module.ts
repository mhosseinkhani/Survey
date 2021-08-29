import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./views/pages/auth/auth.module').then((a) => a.AuthModule),
  },
  {
    path :'survey',
    loadChildren:()=>
    import('./views/pages/survey/survey.module').then((a)=> a.SurveyModule),
  },
  {
    path :'reports',
    loadChildren:()=>
    import('./views/pages/reports/reports.module').then((a)=> a.reportsModule),
  },
  {
    path :'reports',
    loadChildren:()=>
    import('./views/pages/user/user.module').then((a)=> a.UserModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
