import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/core/_models/category.model';

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  data: Category[] = [];

  isUpdate: boolean = false;
  selectedId: number = 0;
  title: string = '';
  isActive: boolean = false;
  mehdi : string = '';

  constructor() {}
  ngOnInit(): void {
    //let item of data
    this.data = [
      {
        id: 1,
        title: 'دسته بندی یکم',
        isActive: true,
      },
      {
        id: 2,
        title: 'دسته بندی دوم',
        isActive: true,
      },
      {
        id: 3,
        title: 'دسته بندی سوم',
        isActive: true,
      },
      {
        id: 4,
        title: 'دسته بندی چهارم',
        isActive: true,
      },
    ];
  }

  save() {
    if (this.isUpdate)
     {
    
      //
    } else
     {

     this.data.push({ id: 20, isActive: this.isActive, title: this.title });
    }
    this.title = '';
    this.isActive = false;
    this.isUpdate = false;
    this.selectedId = 0;
  }
  edit(item: Category) {
    this.isUpdate = true;
    this.selectedId = item.id;
    this.title = item.title;
    this.isActive = item.isActive;
  }
  remove(index: number) {

    this.data.splice(index, 1);
 
  }
  shop(mehdi:string){
    this.mehdi='alijenab'

  }
}
