import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Period } from 'src/app/core/_models/period.model';


@Component({
  selector: 'period',
  templateUrl: './period.component.html',
  styleUrls: ['./period.component.scss'],
})
export class PeriodComponent {
  data: Period[] = [];
  title: string = '';
  isActive: boolean = false;
  message: string = '';
  isUpdate: boolean = false;
  selectedId: number = 0;

  /**
   *
   */
  _formGroup: FormGroup = new FormGroup({});
  constructor() {
    this.data = [
      {
        id: 1,
        title: 'دروه اول',
        date: '1400/01/25',
        status: 'اتمام',
        isActive: true,
      },
      {
        id: 2,
        title: 'دروه دوم',
        date: '1400/02/25',
        status: 'اتمام',
        isActive: false,
      },
      {
        id: 3,
        title: 'دروه سوم',
        date: '1400/03/25',
        status: 'اتمام',
        isActive: false,
      },
    ];
    this._formGroup = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      date: new FormControl('', [Validators.required]),
      check: new FormControl(false),
      selectSth: new FormControl('', Validators.required),
    });
  }
  save() {
    if (!this._formGroup.value.isActive) {
      this.message = 'Is Active Is Required';
      return;
    }
  }

  edit(item: Period) {
    this._formGroup.patchValue({
      title: this.title,
      isActive: this.isActive,
    });

    this.isUpdate = true;
    this.selectedId = item.id;
    //patch
    this._formGroup.patchValue({
      title: item.title,
      isActive: item.isActive,
    });
  }
  remove(index: number) {
    this.data.splice(index, 1);
  }
}
