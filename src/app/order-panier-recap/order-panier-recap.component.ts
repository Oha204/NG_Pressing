import { Component } from '@angular/core';
import { ICommandLine } from '../interfaces/ICommandLine';
import { PanierService } from '../panier.service';

@Component({
  selector: 'app-order-panier-recap',
  templateUrl: './order-panier-recap.component.html',
  styleUrls: ['./order-panier-recap.component.css']
})
export class OrderPanierRecapComponent {
  panier: any[] = [];

  constructor(private panierService: PanierService) {}

  ngOnInit(): void {
    this.panier = this.panierService.getPanier();
  }

    // Méthode pour supprimer un élément du panier
  removeFromPanier(index: number) {
    this.panierService.removeFromPanier(index);
    // Mettre à jour le panier après la suppression
    this.panier = this.panierService.getPanier();
  }

   // Méthode pour calculer le prix total HT
   getTotalPriceLineCommand(commandline: any): number {
    return commandline.articles.price * commandline.articlesQuantity + commandline.prestations.price + commandline.materials.price;
}

  getTotalPriceAllCommands(): number {
    let totalPriceOrder = 0;
    for (const commandline of this.panier) {
        totalPriceOrder += this.getTotalPriceLineCommand(commandline);
    }
    return totalPriceOrder;
}

getTotalPriceTTC(): number {
  const totalPriceHT = this.getTotalPriceAllCommands();
    const TVA = 0.1; // 10% de TVA
    const totalPriceTTC = totalPriceHT * (1 + TVA);
    return totalPriceTTC;
}
}
