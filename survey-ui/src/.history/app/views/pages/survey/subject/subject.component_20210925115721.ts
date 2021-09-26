import { Component } from '@angular/core';

@Component({
  selector: 'category',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss'],
  providers: [CategoryService],
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
