import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilDashboardComponent } from './profil-dashboard.component';

describe('ProfilDashboardComponent', () => {
  let component: ProfilDashboardComponent;
  let fixture: ComponentFixture<ProfilDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilDashboardComponent]
    });
    fixture = TestBed.createComponent(ProfilDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
