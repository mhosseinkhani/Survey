import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionModel } from 'src/app/core/_models/question.model';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent {
  data: QuestionModel[] = [];

  questionTypeId: number = 0;
  questionTypeTitle: string = '';
  _formGroup: FormGroup = new FormGroup({});
  constructor() {}
  ngOnInit(): void {
    // this.data = [
    //   {
    //     questionTypeId: 1,
    //   },
    // ];
  }
}
