import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCoordonneesComponent } from './order-coordonnees.component';

describe('OrderCoordonneesComponent', () => {
  let component: OrderCoordonneesComponent;
  let fixture: ComponentFixture<OrderCoordonneesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderCoordonneesComponent]
    });
    fixture = TestBed.createComponent(OrderCoordonneesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
