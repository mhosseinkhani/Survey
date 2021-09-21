import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PeriodModel } from '../_models/survey/period.model';
const API = environment.BASEURL + 'Survey';


@Injectable ()
export class PeriodService{
 constructor(private http: HttpClient) {}
    loadList():Observable<PeriodModel[]>{
      const api_url=API+'/period';
      return this.http.get<PeriodModel[]>(api_url);
    }

  }




