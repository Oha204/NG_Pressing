import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesPricesComponent } from './services-prices.component';

describe('ServicesPricesComponent', () => {
  let component: ServicesPricesComponent;
  let fixture: ComponentFixture<ServicesPricesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesPricesComponent]
    });
    fixture = TestBed.createComponent(ServicesPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
