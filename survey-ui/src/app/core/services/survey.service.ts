import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SurveyListModel } from '../_models/survey/survey.list.model';
const API = environment.BASEURL + 'Survey/Survey';

@Injectable()
export class SurveyService {
  constructor(private http: HttpClient) {}




  loadList(): Observable<SurveyListModel[]> {
    const api_url = API + '/LoadPeriods';
    return this.http.get<SurveyListModel[]>(api_url);
  }

  add(model: SurveyListModel): Observable<any> {
    const api_url = API + '/create';
    return this.http.post(api_url, model);
  }

  delete(surveryId:number):Observable<any>{
    const api_url = API+ '/remove';
    return this.http.delete(api_url+'?surverId='+surveryId )
  }

}
