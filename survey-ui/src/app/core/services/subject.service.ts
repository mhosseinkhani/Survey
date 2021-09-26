import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EditSubjectmodel, SubjectModel } from '../_models/subject.model';
const API = environment.BASEURL + 'Survey/subject';

@Injectable()
export class SubjectService {
  constructor(private http: HttpClient) {}

  loadList():Observable<SubjectModel[]>{
    const api_url=API+'/LoadsSubjectsCombo';
    return this.http.get<SubjectModel[]>(api_url);
  }
  add(model: SubjectModel):Observable<any>{
    const api_url=API+'/Create';
    return this.http.post(api_url,model);
  }
  delete(categoryId:number):Observable<any>{
    const api_url=API+'/Remove?subjectId='+id;
    return this.http.delete(api_url)
  }
  get(categoryId:number):Observable<EditSubjectmodel>{
    const api_url=API+'/?id='+id;
    return this.http.get<EditSubjectmodel>(api_url)
  }
  update(model: EditSubjectmodel):Observable<any>{
    const api_url=API+'/Update';
    return this.http.post(api_url,model);
  }
}
