import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderValueComponent } from './slider-value.component';

describe('SliderValueComponent', () => {
  let component: SliderValueComponent;
  let fixture: ComponentFixture<SliderValueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SliderValueComponent]
    });
    fixture = TestBed.createComponent(SliderValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
