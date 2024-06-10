import { Component } from '@angular/core';

@Component({
  selector: 'app-slider-services-v2',
  templateUrl: './slider-services-v2.component.html',
  styleUrls: ['./slider-services-v2.component.css']
})
export class SliderServicesV2Component {
  ironingOpen = false;
  washingOpen = false;
  sewingOpen = false;
  stainRemovalOpen = false;
  laundryOpen = false;

  toggleService(service: string): void {
    // Vérifie si la section est déjà ouverte, si oui, ferme-la, sinon, ferme les autres et ouvre celle-ci
    switch (service) {
      case 'ironing':
        this.ironingOpen = !this.ironingOpen;
        this.closeOthers('ironing');
        break;
      case 'washing':
        this.washingOpen = !this.washingOpen;
        this.closeOthers('washing');
        break;
      case 'sewing':
        this.sewingOpen = !this.sewingOpen;
        this.closeOthers('sewing');
        break;
      case 'stain_removal':
        this.stainRemovalOpen = !this.stainRemovalOpen;
        this.closeOthers('stain_removal');
        break;
      case 'laundry':
        this.laundryOpen = !this.laundryOpen;
        this.closeOthers('laundry');
        break;
    }
  }

  closeOthers(except: string): void {
    // Ferme toutes les sections sauf celle spécifiée
    if (except !== 'ironing') this.ironingOpen = false;
    if (except !== 'washing') this.washingOpen = false;
    if (except !== 'sewing') this.sewingOpen = false;
    if (except !== 'stain_removal') this.stainRemovalOpen = false;
    if (except !== 'laundry') this.laundryOpen = false;
  }
}
