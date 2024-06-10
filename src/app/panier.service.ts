import { Injectable } from '@angular/core';
import { IPrestation } from './interfaces/IPrestation';
import { ICommandLine } from './interfaces/ICommandLine';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  private panier: any[] = [];

  constructor() { }

  // Ajouter un élément au panier
  addToPanier(item: any) {
    this.panier.push(item);
  }

  // Obtenir le contenu du panier
  getPanier() {
    return this.panier;
  }

  // Supprimer un élément du panier
  removeFromPanier(index: number) {
    this.panier.splice(index, 1);
  }

}
