import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { QuestionModel } from '../_models/question.model';
const API = environment.BASEURL + 'Survey';




@Injectable()
export class QuestionService{
  constructor(private http : HttpClient){}
  loadList():Observable<QuestionModel[]>{
    const api_url=API+'/question';
    return this.http.get<QuestionModel[]>(api_url);
  }

}


