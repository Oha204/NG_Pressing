import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPaiementComponent } from './order-paiement.component';

describe('OrderPaiementComponent', () => {
  let component: OrderPaiementComponent;
  let fixture: ComponentFixture<OrderPaiementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderPaiementComponent]
    });
    fixture = TestBed.createComponent(OrderPaiementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
