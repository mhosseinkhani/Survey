import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SurveyTypeModel } from 'src/app/core/_models/survey/surveytype.model';

@Component({
  selector: 'surveylist',
  templateUrl: './survey.list.component.html',
  styleUrls: ['./survey.list.component.scss'],
})
export class SurveyListComponent {
  surveyTypes: SurveyTypeModel[] = [
    {
      id: 1,
      title: 'test 1',
    },
    {
      id: 2,
      title: 'test 2',
    },
  ];

  _formGroup: FormGroup = new FormGroup({});

  constructor() {
    this._formGroup = new FormGroup({
      surveyTypeId: new FormControl('', Validators.required),
      ownerUserId: new FormControl('', Validators.required),
      isActive: new FormControl('', Validators.required),
      categoryId: new FormControl('', Validators.required),
    });
  }
}
