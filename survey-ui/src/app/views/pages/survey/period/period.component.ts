import { Component } from '@angular/core';
import { PeriodService } from 'src/app/core/services/period.service';
import { PeriodModel } from 'src/app/core/_models/survey/period.model';

@Component({
  selector: 'period',
  templateUrl: './period.component.html',
  styleUrls: ['./period.component.scss'],
  providers: [PeriodService],
})
export class PeriodComponent {
  data: PeriodModel[] = [];
  selectedId: number = 0;

  /**
   *
   */
  constructor(private service: PeriodService) {
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
