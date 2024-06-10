import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverAboutComponent } from './cover-about.component';

describe('CoverAboutComponent', () => {
  let component: CoverAboutComponent;
  let fixture: ComponentFixture<CoverAboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoverAboutComponent]
    });
    fixture = TestBed.createComponent(CoverAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
