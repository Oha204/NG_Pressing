import { Component } from '@angular/core';
import { PrestationsPriceService } from '../../services/prestations-price.service';
import { IPrestation } from '../../interfaces/IPrestation';
import { IArticle } from '../../interfaces/IArticle';
import { IMaterial } from '../../interfaces/IMaterial';

@Component({
  selector: 'app-simulateur-price',
  templateUrl: './simulateur-price.component.html',
  styleUrls: ['./simulateur-price.component.css']
})
export class SimulateurPriceComponent {
  constructor(private allPrestation:PrestationsPriceService) {}

  prestations: IPrestation[] = [];
  articles: IArticle[] = [];
  materials: IMaterial[] = [];
  articlesQuantity: number = 0;

  selectedService: IPrestation[] = [];;
  selectedArticle: IArticle[] = [];;
  selectedMaterial: IMaterial[] = [];;
  totalPrice: number = 0;
  
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
      this.articles = data.map(article => ({ ...article, quantity: 0 })); // Initialiser la quantité à 0
      return this.articles;
    })
  }

  getMaterial() {
    this.allPrestation.fetchAllMaterials().subscribe(data => {
      this.materials = data;
      return this.materials;
    })
  }

// permet d'ajouter +1 à la quantité
increaseQuantity(): void {
  this.articlesQuantity++;
}

// permet d'enlever -1 à la quantité
decreaseQuantity(): void {
  if (this.articlesQuantity > 0) {
    this.articlesQuantity--;
  }
}

}
