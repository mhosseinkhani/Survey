import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionModel } from 'src/app/core/_models/question.model';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent {
  data: QuestionModel[] = [];
  _formGroup: FormGroup = new FormGroup({});
  message: string = '';
  selectedId: number = 0;
  isUpdated: boolean = false;
  constructor() {}
  ngOnInit(): void {
    this.data = [
      {
        questionTitle: '',
        isActive: false,
        surveyId: 0,
        subjectId: 0,
        questionTypeId: 0,
        questionParameters: 'سنجش سازمان 1',
        priority: 0,
        isRequired: false,
        questionItems: [],
      },
      {
        questionTitle: '',
        isActive: false,
        surveyId: 1,
        subjectId: 1,
        questionTypeId: 1,
        questionParameters: 'سنجش سازمان 2',
        priority: 0,
        isRequired: true,
        questionItems: [],
      },
      {
        questionTitle: '',
        isActive: false,
        surveyId: 2,
        subjectId: 2,
        questionTypeId: 2,
        questionParameters: 'سنجش سازمان 3',
        priority: 0,
        isRequired: true,
        questionItems: [],
      },
    ];

    this._formGroup = new FormGroup({
     title:new FormControl('',Validators.required),
     title2:new FormControl('',Validators.required),
     title3:new FormControl('',Validators.required),
     checkbox:new FormControl(Validators.required),
     checkbox2:new FormControl(Validators.required),
     select: new FormControl('', Validators.required),
     select2:new FormControl('',Validators.required),
     select3:new FormControl('',Validators.required),
    });
  }
  save() {
    if (!this._formGroup.value.isActive) {
      this.message = 'this Active Is Required';
      return;
    }
    if (this.isUpdated) {
    } else {
      this.data.push(this._formGroup.value);
    }
    this.isUpdated = false;
    this.selectedId = 0;
  }
  edit(item: QuestionModel) {
    this.isUpdated = true;
    this.selectedId = item.surveyId;
    //patch
    this._formGroup.patchValue({
      title: item.questionTitle,
      isActive: item.isActive,
    });
  }
  remove(index: number) {
    this.data.splice(index, 1);
  }
}
