import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PeriodModel } from '../_models/survey/period.model';
const API = environment.BASEURL + 'Survey/period';

@Injectable()
export class PeriodService {
  constructor(private http: HttpClient) {}
  loadList(): Observable<PeriodModel[]> {
    const api_url = API + '/LoadPeriods';
    return this.http.get<PeriodModel[]>(api_url);
  }

  add(model: PeriodModel): Observable<any> {
    const api_url = API + '/create';
    return this.http.post(api_url, model);
  }

}
