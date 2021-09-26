import { NgModule } from '@angular/core';
import { SurveyComponent } from './survey.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './question/question.componet';
import { CategoryComponent } from './category/category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubjectComponent } from './subject/subject.component';
import { PeriodComponent } from './period/period.component';
import { EditPeriodComponent } from './period/sub/edit/edit-period.component';
import { EditSurveyComponent } from './survey.list/sub/edit/editSurvey.component';
import { SurveylistComponent } from './survey.list/survey.list.component';
import { EditCategoryComponent } from './category/sub/edit/edit.category.component';
import { EditSubjectComponent } from './subject/sub/edit/edit.subject.component';
import { EditQuestionComponent } from './question/sub/edit.question.component';

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
        path: 'period/create',
        component: EditPeriodComponent,
      },
      {
        path: 'survey/edit',
        component: EditSurveyComponent,
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
        component: SurveylistComponent,
      },
      {
        path: 'category/edit',
        component: EditCategoryComponent,
      },
      {
        path: 'subject/edit',
        component: EditSubjectComponent,
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
    SubjectComponent,
    PeriodComponent,
    EditPeriodComponent,
    EditSurveyComponent,
    SurveylistComponent,
    EditCategoryComponent,
    EditSubjectComponent,
    EditQuestionComponent
  ],
  providers: [],
})
export class SurveyModule {}
