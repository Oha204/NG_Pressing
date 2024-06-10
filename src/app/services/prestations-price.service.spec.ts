import { TestBed } from '@angular/core/testing';

import { PrestationsPriceService } from './prestations-price.service';

describe('PrestationsPriceService', () => {
  let service: PrestationsPriceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrestationsPriceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
