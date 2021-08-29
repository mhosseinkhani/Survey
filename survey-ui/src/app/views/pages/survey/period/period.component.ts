import { Component } from "@angular/core";



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


       
    }
}