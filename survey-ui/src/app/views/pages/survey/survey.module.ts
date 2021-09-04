import { Component, NgModule } from '@angular/core';
import { OrgansComponent } from './organs/orgons.component';
import { PeriodComponent } from './period/period.component';
import { SurveyComponent } from './survey.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './question/question.componet';
import { CategoryComponent } from './category/category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubjectComponent } from './subject/subject.component';
import { SurveyListComponent } from './survey.list/survey.list.component';

const routes: Routes = [
  {
    path: '',
    component: SurveyComponent,
    children: [
      {
        path: '',
        redirectTo: 'organs',
        pathMatch: 'full',
      },
      {
        path: 'organs',
        component: OrgansComponent,
        data: { returnUrl: window.location.pathname },
      },
      {
        path: 'period',
        component: PeriodComponent,
      },
      {
        path: 'question',
        component: QuestionComponent,
      },
      {
        path: 'category',
        component: CategoryComponent,
      },
      {
        path: 'subject',
        component: SubjectComponent,
      },
      {
        path: 'surveylist',
        component: SurveyListComponent,
      },
    ],
  },
];
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [SurveyComponent],
  declarations: [
    SurveyComponent,
    PeriodComponent,
    OrgansComponent,
    QuestionComponent,
    CategoryComponent,
    SurveyComponent,
    SubjectComponent,
    SurveyListComponent,
  ],
  providers: [],
})
export class SurveyModule {}
