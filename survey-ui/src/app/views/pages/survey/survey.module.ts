import { Component, NgModule } from '@angular/core';
import { SurveyComponent } from './survey.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './question/question.componet';
import { CategoryComponent } from './category/category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubjectComponent } from './subject/subject.component';
import { SurveyListComponent } from './survey.list/survey.list.component';
import { HttpClientModule } from '@angular/common/http';
import { PeriodComponent } from './period/period.component';

const routes: Routes = [
  {
    path: '',
    component: SurveyComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
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
    RouterModule.forChild(routes)
  ],
  exports: [SurveyComponent],
  declarations: [
    SurveyComponent,
    QuestionComponent,
    CategoryComponent,
    SurveyComponent,
    SubjectComponent,
    SurveyListComponent,
    PeriodComponent
  ],
  providers: [],
})
export class SurveyModule {}
