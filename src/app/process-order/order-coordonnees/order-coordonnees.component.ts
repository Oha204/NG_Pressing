import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DateSelectionServiceService } from 'src/app/date-selection-service.service';
import { PanierService } from 'src/app/panier.service';

@Component({
  selector: 'app-order-coordonnees',
  templateUrl: './order-coordonnees.component.html',
  styleUrls: ['./order-coordonnees.component.css']
})
export class OrderCoordonneesComponent {
  panier: any[] = [];
  selectedDate: string = '';


  constructor(private panierService: PanierService, private route: ActivatedRoute, private dateSelectionService: DateSelectionServiceService) {}

  ngOnInit(): void {
    this.panier = this.panierService.getPanier();

     // Récupérer la date sélectionnée à partir du service de sélection de date
     this.selectedDate = this.dateSelectionService.getSelectedDate();
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

  formatDate(selectedDate: string): string {
    if (!selectedDate) {
        return ''; 
    }

    const options: Intl.DateTimeFormatOptions = {
        weekday: 'long', 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric' 
    };

    const date = new Date(selectedDate);
    return date.toLocaleDateString('fr-FR', options);
}
}
