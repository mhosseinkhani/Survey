import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Subject } from "rxjs";


@Component({
    selector:'subject',
    templateUrl:'./subject.component.html',
    styleUrls:['./subject.component.scss']
})
export class SubjectComponent
{
  data: Subject[] = [];

  categoryId : number = 0;
  title : string ='';
  isActive : boolean =false;


    _formGroup : FormGroup = new FormGroup ({});
constructor (){


    this._formGroup = new FormGroup({
        CategoryId : new FormControl ('',Validators.required),
         title : new FormControl('',Validators.required),
         isActive : new FormControl('',Validators.required)

    })
}

 }

