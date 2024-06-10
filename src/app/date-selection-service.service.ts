import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateSelectionServiceService {

  private selectedDate: string = '';

  constructor() { }

  setSelectedDate(date: string): void {
    this.selectedDate = date;
  }

  getSelectedDate(): string {
    return this.selectedDate;
  }
}
