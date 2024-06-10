import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilDetailsOrdersComponent } from './profil-details-orders.component';

describe('ProfilDetailsOrdersComponent', () => {
  let component: ProfilDetailsOrdersComponent;
  let fixture: ComponentFixture<ProfilDetailsOrdersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilDetailsOrdersComponent]
    });
    fixture = TestBed.createComponent(ProfilDetailsOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
