import { Component } from '@angular/core';
import { SubjectService } from '../../../../core/services/subject.service';
import { SubjectModel } from '../../../../core/_models/subject.model';

@Component({
  selector: 'subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss'],
  providers: [SubjectService],
})
export class SubjectComponent {
  data: SubjectModel[] = [];
  selectedId: number = 0;

  /**
   *
   */
  constructor(private service: SubjectService) {
    this.loadData();
  }

  private loadData() {
    this.data = [];
    this.service.loadList().subscribe(reponse => {
      this.data = reponse;
    });
  }

  edit(item: SubjectModel) {

  }
  remove(catId: number) {
    this.service.delete(catId).subscribe(respomse=>{
      this.loadData();
    })
  }
}
