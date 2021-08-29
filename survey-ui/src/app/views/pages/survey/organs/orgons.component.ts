import { Component } from "@angular/core";

  @Component({
      selector:'organs',
      templateUrl:'./organs.component.html',
      styleUrls:['./organs.component.scss']
  })
  export class OrgansComponent {
      
    data:any[];
    
    /**
     *
     */
    constructor(){
      this.data= [{
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
      status: "نا تمام"
  },
    ]

    }
  }