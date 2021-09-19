import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CategoryModel } from '../_models/category.model';
const API = environment.BASEURL + 'Survey/Category';

@Injectable()
export class CategoryService {
  constructor(private http: HttpClient) {}

  loadList():Observable<CategoryModel[]>{
    const api_url=API+'/LoadCategories';
    return this.http.get<CategoryModel[]>(api_url);
  }
}
