import { Component } from '@angular/core';
import { CategoryService } from 'src/app/core/services/category.service';
import { CategoryModel } from 'src/app/core/_models/category.model';

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  providers: [CategoryService],
})
export class CategoryComponent {
  data: CategoryModel[] = [];
  selectedId: number = 0;

  /**
   *
   */
  constructor(private service: CategoryService) {
    this.loadData();
  }

  private loadData() {
    this.data = [];
    this.service.loadList().subscribe(reponse => {
      this.data = reponse;
    });
  }

  edit(item: CategoryModel) {

  }
  remove(catId: number) {
    this.service.delete(catId).subscribe(respomse=>{
      this.loadData();
    })
  }
}
