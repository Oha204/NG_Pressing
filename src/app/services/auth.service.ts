import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../interfaces/IUser';
import { Observable } from 'rxjs/internal/Observable';
import { IToken } from '../interfaces/IToken';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient, private route:Router) { }

  url="http://127.0.0.1:8000/api"
  logged: boolean = false;

  //Prend en paramètre un objet credentials qui contient les informations de connexion de l’utilisateur (id/mdp). Renvoie un Observable avc objet IToken si la connexion=t, ou une erreur si connexion=f.
  login(credentials:any):Observable<IToken>{
    return this.http.post<IToken>(this.url+'/login_check', credentials);
  }

  // methode pour recuperer le token et le stocker dans le localstorage
  saveToken(token:string){
    localStorage.setItem('token', token);
        this.route.navigate(['/profil_user']);
  }

  // recuperer le token pour le propager dans toute l’application
  getToken(){
    return localStorage.getItem('token');
  }

  // Déconnexion 
  logout(){
    localStorage.removeItem('token');
    this.logged = false;
  }

  //vérifier si l’utilisateur est authentifié
  isLogged():boolean{
    const token = localStorage.getItem('token');
    return !! token
  }

}
