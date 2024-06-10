import { Component, OnInit } from '@angular/core';
import { IPrestation } from '../interfaces/IPrestation';
import { PrestationsPriceService } from '../services/prestations-price.service';

@Component({
  selector: 'app-services-prices',
  templateUrl: './services-prices.component.html',
  styleUrls: ['./services-prices.component.css']
})
export class ServicesPricesComponent implements OnInit {

  constructor(private allPrestation:PrestationsPriceService) {}

  prestations: IPrestation[] = [];
  selectedItem: IPrestation | null = null;

  ngOnInit() {
    this.getPrestations();
  }
  
  getPrestations() {
    this.allPrestation.fetchAllPrestations().subscribe(data => {
      this.prestations = data;
      return this.prestations;
    })
  } 
  
  toggleCollapse(item: IPrestation) {
    if (this.selectedItem === item) {
      this.selectedItem = null;
    } else {
      this.selectedItem = item;
    }
  }
}
