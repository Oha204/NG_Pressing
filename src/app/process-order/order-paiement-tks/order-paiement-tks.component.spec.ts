import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPaiementTksComponent } from './order-paiement-tks.component';

describe('OrderPaiementTksComponent', () => {
  let component: OrderPaiementTksComponent;
  let fixture: ComponentFixture<OrderPaiementTksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderPaiementTksComponent]
    });
    fixture = TestBed.createComponent(OrderPaiementTksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
