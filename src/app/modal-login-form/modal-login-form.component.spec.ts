import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLoginFormComponent } from './modal-login-form.component';

describe('ModalLoginFormComponent', () => {
  let component: ModalLoginFormComponent;
  let fixture: ComponentFixture<ModalLoginFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalLoginFormComponent]
    });
    fixture = TestBed.createComponent(ModalLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
