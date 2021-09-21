import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginResponse } from '../_models/auth/login.model';
const API = environment.BASEURL + 'UserManagement/User/Manager';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  login(userName: string, password: string): Observable<LoginResponse> {
    const api_url = API + '/login';

    return this.http.post<LoginResponse>(api_url, {
      userName,
      password,
    });
  }
}

