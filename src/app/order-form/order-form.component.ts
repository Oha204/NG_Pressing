import { Component } from '@angular/core';
import { PrestationsPriceService } from '../services/prestations-price.service';
import { PanierService } from '../panier.service';
import { IPrestation } from '../interfaces/IPrestation';
import { IArticle } from '../interfaces/IArticle';
import { IMaterial } from '../interfaces/IMaterial';
import { ICommandLine } from '../interfaces/ICommandLine';


@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent {
  constructor(
    private allPrestation:PrestationsPriceService,
    private panierService: PanierService
    ) {}

  commandLine: any = [];
  prestations: IPrestation[] = [];
  articles: IArticle[] = [];
  materials: IMaterial[] = [];
  articlesQuantity: number = 0;
  selectedArticle: string = '';
  selectedMaterial: string = '';
  selectedPrestation: string = '';
  orderMessage: string = '';

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
      this.articles = data.map(article => ({ ...article, quantity: 0 })); 
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

  addToPanier(order: ICommandLine): void {
    // Recherchez l'article sélectionné dans le tableau d'articles
  const selectedArticle = this.articles.find(article => article.name === this.selectedArticle);

  // Recherchez le matériau sélectionné dans le tableau de matériaux
  const selectedMaterial = this.materials.find(material => material.name === this.selectedMaterial);

  // Recherchez la prestation sélectionnée dans le tableau de prestations
  const selectedPrestation = this.prestations.find(prestation => prestation.name === this.selectedPrestation);

  // Créez votre objet commandLine en incluant les prix
  this.commandLine = {
    prestations: selectedPrestation,
    articles: selectedArticle,
    articlesQuantity: this.articlesQuantity,
    materials: selectedMaterial,
    message: this.orderMessage
  };

  console.log(this.commandLine);

  // Ajouter les détails de la commande au panier
  this.panierService.addToPanier(this.commandLine);

  // Vérifier le contenu du panier après l'ajout
console.log("Contenu du panier après l'ajout :", this.panierService.getPanier());

  // Réinitialiser les valeurs du formulaire après la soumission
  this.resetForm();
}

   // Stocker les détails de la commande en attente dans le localStorage
  // localStorage.setItem('pendingOrder', JSON.stringify(this.pendingOrder));


resetForm(): void {
  this.selectedArticle = '';
  this.selectedMaterial = '';
  this.selectedPrestation = ''; 
  this.articlesQuantity = 0;
  this.orderMessage = '';
}
}




