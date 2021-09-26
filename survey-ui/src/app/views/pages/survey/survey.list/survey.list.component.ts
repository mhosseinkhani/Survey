import { Component } from '@angular/core';
import { SurveyService } from 'src/app/core/services/survey.service';
import { PeriodModel } from 'src/app/core/_models/survey/period.model';
import { SurveyListModel } from 'src/app/core/_models/survey/survey.list.model';

@Component({
  selector: 'survey',
  templateUrl: './survey.list.component.html',
  styleUrls: ['./survey.list.component.scss'],
  providers: [SurveyService],
})
export class SurveylistComponent {
  data: SurveyListModel[] = [];
  selectedId: number = 0;

  /**
   *
   */
  constructor(private service: SurveyService) {
    this.data= [];
    this.service.loadList().subscribe(reponse=>{
      this.data=reponse;
    });
  }

  edit(item: PeriodModel) {
    // this._formGroup.patchValue({
    //   title: this.title,
    //   isActive: this.isActive,
    // });
    // this.isUpdate = true;
    // this.selectedId = item.ownerUserId;
    // //patch
    // this._formGroup.patchValue({
    //   title: item.title,
    //   isActive: item.isActive,
    // });
  }
  remove(index: number) {
    this.data.splice(index, 1);
  }
}
