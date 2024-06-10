import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSelectDateComponent } from './order-select-date.component';

describe('OrderSelectDateComponent', () => {
  let component: OrderSelectDateComponent;
  let fixture: ComponentFixture<OrderSelectDateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderSelectDateComponent]
    });
    fixture = TestBed.createComponent(OrderSelectDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
