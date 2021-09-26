import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SurveyService } from 'src/app/core/services/survey.service';

@Component({
  selector: 'editSurvey',
  templateUrl: 'editSurvey.component.html',
  styleUrls: ['./editSurvey.component.scss'],
  providers: [SurveyService],
})
export class EditSurveyComponent implements OnInit {
  id: number = 0;
  _formGroup: FormGroup = new FormGroup({});
  message: string = '';
  isUpdate: boolean = false;
  userList: any[] = [];
  characterRecognitionSurveyList: any[] = [];
  periodStateList: any[] = [];
  attitudeSurveyList: any[] = [];
  constructor(
    private service: SurveyService,
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
      surveyTitle: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      isActive: new FormControl('', [Validators.required]),
      surveyType: new FormControl('', Validators.required),
      id: new FormControl('', Validators.required),
      categoryId: new FormControl('', Validators.required),
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
