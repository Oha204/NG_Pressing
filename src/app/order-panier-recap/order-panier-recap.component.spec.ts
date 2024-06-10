import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPanierRecapComponent } from './order-panier-recap.component';

describe('OrderPanierRecapComponent', () => {
  let component: OrderPanierRecapComponent;
  let fixture: ComponentFixture<OrderPanierRecapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderPanierRecapComponent]
    });
    fixture = TestBed.createComponent(OrderPanierRecapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
