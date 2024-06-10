import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderServicesV2Component } from './slider-services-v2.component';

describe('SliderServicesV2Component', () => {
  let component: SliderServicesV2Component;
  let fixture: ComponentFixture<SliderServicesV2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SliderServicesV2Component]
    });
    fixture = TestBed.createComponent(SliderServicesV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
