import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderGoogleReviewComponent } from './slider-google-review.component';

describe('SliderGoogleReviewComponent', () => {
  let component: SliderGoogleReviewComponent;
  let fixture: ComponentFixture<SliderGoogleReviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SliderGoogleReviewComponent]
    });
    fixture = TestBed.createComponent(SliderGoogleReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
