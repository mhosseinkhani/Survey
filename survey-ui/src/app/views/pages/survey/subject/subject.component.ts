import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'src/app/core/_models/subject.model';

@Component({
  selector: 'subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss'],
})
export class SubjectComponent {
  data: Subject[] = [];

  _formGroup = new FormGroup({
    CategoryId: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
    isActive: new FormControl('', Validators.required),

  });

  constructor() {
    this.data = [
      {
        id: 1,
        title: 'دروه اول',
        date: '1400/01/25',
        status: 'اتمام',
        isActive: true,
      },
    ];
  }
}
