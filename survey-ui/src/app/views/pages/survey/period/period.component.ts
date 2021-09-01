import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";



@Component({
    selector: 'period',
    templateUrl: './period.component.html',
    styleUrls: ['./period.component.scss']
})

export class PeriodComponent {
    data: any[];

    /**
     *
     */
     _formGroup: FormGroup=new FormGroup({}) ;
    constructor() {
        this.data = [{
            id: 1,
            name: "دروه اول",
            date: "1400/01/25",
            status: "اتمام"
        },
        {
            id: 2,
            name: "دروه دوم",
            date: "1400/02/25",
            status: "اتمام"
        },
        {
            id: 3,
            name: "دروه سوم",
            date: "1400/03/25",
            status: "اتمام"
        }];
        this._formGroup = new FormGroup({
          title: new FormControl('', [Validators.required,Validators.minLength(3),Validators.maxLength(5)]),
          date : new FormControl('',[Validators.required]  ),
          check : new FormControl(false),
          selectSth : new FormControl('',Validators.required)
        })


    }
}
