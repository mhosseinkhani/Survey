import { NgModule } from '@angular/core';

import { ReportsComponent } from './reports.component';

import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OrganComponent } from './organ/organ.component';
import { PersonComponent } from './person/person.component';


const routes: Routes = [
    {
      path: '',
      component: ReportsComponent,
      children: [
        {
          path: '',
          redirectTo: 'organ',
          pathMatch: 'full',
        },
        {
          path: 'organ',
          component: OrganComponent,
          data: { returnUrl: window.location.pathname },
  
        },
        {
          path :'person',
          component: PersonComponent,
        }
      ],
    },
  ];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [ReportsComponent],
    declarations: [ReportsComponent,PersonComponent,OrganComponent],
    providers: [],
})
export class reportsModule { }
