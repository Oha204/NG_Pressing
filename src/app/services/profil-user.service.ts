import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/IUser';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfilUserService {

  constructor(private http:HttpClient) { }
  url="http://127.0.0.1:8000/api"

  fetchAllInfoUser(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.url + '/users');
  }

  // fetchLoggedInUserInfo(): Observable<IUser> {
  //   return this.http.get<IUser>(this.url + '/users/{id}');
  // }
}
