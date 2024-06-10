import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPrestation } from '../interfaces/IPrestation';
import { IArticle } from '../interfaces/IArticle';
import { IMaterial } from '../interfaces/IMaterial';

@Injectable({
  providedIn: 'root'
})
export class PrestationsPriceService {

  constructor(private http:HttpClient) { }

  url="http://127.0.0.1:8000/api"

  fetchAllPrestations() {
    return this.http.get<IPrestation[]>(this.url+'/services')
  }

  fetchAllArticles() {
    return this.http.get<IArticle[]>(this.url+'/articles')
  }

  fetchAllMaterials() {
    return this.http.get<IMaterial[]>(this.url+'/materials')
  }
}
