import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PeriodService } from 'src/app/core/services/period.service';

@Component({
  selector: 'edit-period',
  templateUrl: 'edit-period.component.html',
  styleUrls: ['./edit-period.component.scss'],
  providers: [PeriodService],
})
export class EditPeriodComponent implements OnInit {
  id: number = 0;
  _formGroup: FormGroup = new FormGroup({});
  message: string = '';
  isUpdate: boolean = false;
  userList: any[] = [];
  characterRecognitionSurveyList: any[] = [];
  periodStateList: any[] = [];
  attitudeSurveyList: any[] = [];
  constructor(
    private service: PeriodService,
    private activateRouter: ActivatedRoute
  ) {}

  ngOnInit() {
    this.initForm();
    this.loadUserList();
    this.loadCharacterRecognitionSurveyList();
    this.loadPeriodStateList();
    this.LoadattitudeSurveyList();


    if (this.activateRouter.snapshot.queryParams['id']) {
      this.id = this.activateRouter.snapshot.queryParams['id'];

    }
  }

  private initForm() {
    this._formGroup = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      isActive: new FormControl('', [Validators.required]),
      ownerUserId: new FormControl('', Validators.required),
      isScheduled: new FormControl('false'),
      startOn: new FormControl('', Validators.required),
      finishOn: new FormControl('', Validators.required),
      characterRecognitionSurveyId: new FormControl('', Validators.required),
      attitudeSurveyId: new FormControl('', Validators.required),
      loginUrl: new FormControl('', Validators.required),
      periodStateId: new FormControl('', Validators.required),
    });
  }
  private loadUserList() {
    //برو از سرویس بگیر و بریز داخل userList
    this.userList = [
      {
        id: 1,
        title: 'مدیر',
      },
      {
        id: 2,
        title: 'معاونت',
      },
    ];
  }
  private loadCharacterRecognitionSurveyList() {
    //برو از سرویس بگیر و بریز داخل characterRecognitionSurveyList
    this.characterRecognitionSurveyList = [
      {
        id: 1,
        title: 'شناختی',
      },
      {
        id: 2,
        title: 'روانی',
      },
    ];
  }
  private loadPeriodStateList() {
    this.periodStateList = [
      {
        id: 1,
        title: 'درمانی',
      },
      {
        id: 2,
        title: 'پژوهشی',
      },
    ];
  }
  private LoadattitudeSurveyList() {
    this.attitudeSurveyList = [
      {
        id: 1,
        title: 'هزینه ای',
      },
      {
        id: 2,
        title: 'درامدی',
      },
    ];
  }

  save() {
    if (this._formGroup.invalid) {
      this.message = 'لطفا موارد ورودی را کنترل نمایید.';
      return;
    }
    debugger;
    const model = this._formGroup.value;
    this.service.add(model).subscribe(
      (response) => {
        this.message = 'عملیات با موفقیت انام شد';
      },
      (error) => {
        this.message = error.error.details;
      }
    );
  }
}
