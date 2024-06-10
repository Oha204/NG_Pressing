import { Component } from '@angular/core';
import { IArticle } from 'src/app/interfaces/IArticle';
import { IMaterial } from 'src/app/interfaces/IMaterial';
import { IPrestation } from 'src/app/interfaces/IPrestation';
import { PrestationsPriceService } from 'src/app/services/prestations-price.service';

@Component({
  selector: 'app-list-price',
  templateUrl: './list-price.component.html',
  styleUrls: ['./list-price.component.css']
})
export class ListPriceComponent {
  constructor(private allPrestation:PrestationsPriceService) {}

  prestations: IPrestation[] = [];
  articles: IArticle[] = [];
  materials: IMaterial[] = [];

  ngOnInit() {
    this.getPrestations();
    this.getArticles();
    this.getMaterial();
  }
  
  getPrestations() {
    this.allPrestation.fetchAllPrestations().subscribe(data => {
      this.prestations = data;
      return this.prestations;
    })
  } 

  getArticles() {
    this.allPrestation.fetchAllArticles().subscribe(data => {
      this.articles = data;
      return this.articles;
    })
  }

  getMaterial() {
    this.allPrestation.fetchAllMaterials().subscribe(data => {
      this.materials = data;
      return this.materials;
    })
  }
}
