import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private http:HttpClient) { }

  url="http://127.0.0.1:8000/api"

  // ajouter un user (register)
  add(user:IUser){
    return this.http.post<IUser>(this.url+'/users', user)
  }
  
}
