import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuesEngagementsComponent } from './values-engagements.component';

describe('ValuesEngagementsComponent', () => {
  let component: ValuesEngagementsComponent;
  let fixture: ComponentFixture<ValuesEngagementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValuesEngagementsComponent]
    });
    fixture = TestBed.createComponent(ValuesEngagementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
