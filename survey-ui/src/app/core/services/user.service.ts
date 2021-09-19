import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
const API_LOGIN =environment.BASEURL+'UserManagement/User/Manager/login';
@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  login(userName: string, password: string):Observable<any> {
    return this.http.post(
     API_LOGIN,
      {
        userName: userName,
        password: password,
      }
    );
  }
}
