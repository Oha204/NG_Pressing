import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DateSelectionServiceService } from 'src/app/date-selection-service.service';
import { PanierService } from 'src/app/panier.service';

@Component({
  selector: 'app-order-select-date',
  templateUrl: './order-select-date.component.html',
  styleUrls: ['./order-select-date.component.css']
})
export class OrderSelectDateComponent {

  panier: any[] = [];
  selectedDate: string = '';

  constructor(private panierService: PanierService, private router: Router, private dateSelectionService: DateSelectionServiceService) {}

  ngOnInit(): void {
    this.panier = this.panierService.getPanier();
  }

  // Fonction pour obtenir la date d'aujourd'hui en format ISO
  getToday(): string {
    return new Date().toISOString().split('T')[0];
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

addToPanier(): void {
  // Récupérer la date sélectionnée
  const selectedDate = this.selectedDate;

  // Stocker la date dans le service de sélection de date pour y accéder dans un autre composant
  this.dateSelectionService.setSelectedDate(selectedDate);

  // Naviguer vers la prochaine page
  this.router.navigate(['/order_coordonnees'], { queryParams: { selectedDate: selectedDate } });
}
}
