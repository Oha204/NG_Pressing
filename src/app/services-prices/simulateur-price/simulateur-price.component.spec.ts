import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulateurPriceComponent } from './simulateur-price.component';

describe('SimulateurPriceComponent', () => {
  let component: SimulateurPriceComponent;
  let fixture: ComponentFixture<SimulateurPriceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimulateurPriceComponent]
    });
    fixture = TestBed.createComponent(SimulateurPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
