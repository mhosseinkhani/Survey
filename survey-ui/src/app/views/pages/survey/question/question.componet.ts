import { Component } from "@angular/core";
import { Question } from "src/app/core/_models/question.model";


@Component({
    selector:'question',
    templateUrl:'./question.component.html',
    styleUrls:['./question.component.scss']
})
export class QuestionComponent{

    data: Question[] = [];

    isUpdate: boolean = false;
    selectedId: number = 0;
    title: string = '';
    isActive: boolean = false;
  
    constructor() {}
    ngOnInit(): void {
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
      if (this.isUpdate) {
        //
      } else {
        this.data.push({ id: 20, isActive: this.isActive, title: this.title });
      }
      this.title = '';
      this.isActive = false;
      this.isUpdate = false;
      this.selectedId = 0;
    }
    edit(item: Question) {
      this.isUpdate = true;
      this.selectedId = item.id;
      this.title = item.title;
      this.isActive = item.isActive;
    }
    remove(index: number) {
      this.data.splice(index, 1);
    }
  }
  
    
