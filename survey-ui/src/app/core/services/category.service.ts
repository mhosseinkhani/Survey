import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CategoryModel, CatogoryEditModel } from '../_models/category.model';
const API = environment.BASEURL + 'Survey/Category';

@Injectable()
export class CategoryService {
  constructor(private http: HttpClient) {}

  loadList():Observable<CategoryModel[]>{
    const api_url=API+'/LoadCategories';
    return this.http.get<CategoryModel[]>(api_url);
  }
  add(model: CatogoryEditModel):Observable<any>{
    const api_url=API+'/Create';
    return this.http.post(api_url,model);
  }
  delete(categoryId:number):Observable<any>{
    const api_url=API+'/Remove?categoryId='+categoryId;
    return this.http.delete(api_url)
  }
  get(categoryId:number):Observable<CatogoryEditModel>{
    const api_url=API+'/GetCategory?categoryId='+categoryId;
    return this.http.get<CatogoryEditModel>(api_url)
  }
  update(model: CatogoryEditModel):Observable<any>{
    const api_url=API+'/Update';
    return this.http.post(api_url,model);
  }
}
