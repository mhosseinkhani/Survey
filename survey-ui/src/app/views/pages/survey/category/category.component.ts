import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/core/services/category.service';
import { CategoryModel } from 'src/app/core/_models/category.model';

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  providers: [CategoryService],
})
export class CategoryComponent implements OnInit {
  data: CategoryModel[] = [];

  isUpdate: boolean = false;
  selectedId: number = 0;
  message: string = '';
  _formGroup: FormGroup = new FormGroup({});
  constructor(private service: CategoryService) {}
  ngOnInit(): void {
    //let item of data
    this.data = [];
    this.service.loadList().subscribe((response) => {
      this.data = response;
    });
    //form init
    this._formGroup = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      isActive: new FormControl(false),
    });
  }

  save() {
    if (!this._formGroup.value.isActive) {
      this.message = 'this Active Is Required';
      return;
    }
    if (this.isUpdate) {
      //
    } else {
      this.data.push(this._formGroup.value);
    }
    this.isUpdate = false;
    this.selectedId = 0;
  }
  edit(item: CategoryModel) {
    this.isUpdate = true;
    this.selectedId = item.id;
    //patch
    this._formGroup.patchValue({
      title: item.categoryTitle,
      isActive: item.isActive,
    });
  }
  remove(index: number) {
    this.data.splice(index, 1);
  }
  shop(mehdi: string) {}

  mehdi2() {
    console.log('dknsd');
  }
}
