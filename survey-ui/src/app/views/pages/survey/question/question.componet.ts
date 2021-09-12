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
  isUpdate: boolean = false;
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
        isActive: true,
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
      questionTitle:new FormControl('',Validators.required),
      questionParameters:new FormControl('',Validators.required),
      priority:new FormControl('',Validators.required),
     isActive:new FormControl(Validators.required),
     isRequired:new FormControl(Validators.required),
     surveyId: new FormControl('', Validators.required),
     subjectId:new FormControl('',Validators.required),
     questionTypeId:new FormControl('',Validators.required),
    });
  }

  save() {
    if(this._formGroup.invalid){
      this.message="this Active Is Required";
      return;
    }
    if (this.isUpdate) {
      //
    } else {
      this.data.push(this._formGroup.value
        );
    }
    this.isUpdate = false;
    this.selectedId = 0;}
  edit(item: QuestionModel) {
    this.isUpdate= true;
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
