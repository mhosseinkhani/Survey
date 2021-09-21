import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PeriodService } from 'src/app/core/services/period.service';
import { PeriodModel } from 'src/app/core/_models/survey/period.model';


@Component({
  selector: 'period',
  templateUrl: './period.component.html',
  styleUrls: ['./period.component.scss'],
})
export class PeriodComponent {
  data: PeriodModel[] = [];
  _formGroup: FormGroup = new FormGroup({});
  title:string= '';
  isActive:boolean= false;
  ownerUserId:number= 0 ;
  isScheduled:boolean= false;
  startOn:Date=new Date();
  finishOn:Date=new Date();
  characterRecognitionSurveyId:number=  0 ;
  attitudeSurveyId:number= 0;
  loginUrl:string='';
  periodStateId:number=0;
  message:string='';
  isUpdate:boolean=false;
  selectedId:number=0;





  /**
   *
   */
  constructor (private service: PeriodService) {
    this.data = [
    ];
    this._formGroup = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      isActive: new FormControl('', [Validators.required]),
      ownerUserId: new FormControl('',Validators.required),
      isScheduled: new FormControl('false'),
      startOn:new FormControl('',Validators.required),
      finishOn:new FormControl('',Validators.required),
      characterRecognitionSurveyId:new FormControl('',Validators.required),
      attitudeSurveyId:new FormControl('',Validators.required),
      loginUrl:new FormControl('',Validators.required),
      periodStateId:new FormControl('',Validators.required),
    });
  }
  save() {
    if (!this._formGroup.value.isActive) {
      this.message = 'Is Active Is Required';
      return;
    }
  }

  edit(item: PeriodModel) {
    this._formGroup.patchValue({
      title: this.title,
      isActive: this.isActive,
    });
    this.isUpdate = true;
    this.selectedId = item.ownerUserId;
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

