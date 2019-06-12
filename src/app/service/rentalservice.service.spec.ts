import { TestBed } from '@angular/core/testing';

import { RentalserviceService } from './rentalservice.service';

describe('RentalserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RentalserviceService = TestBed.get(RentalserviceService);
    expect(service).toBeTruthy();
  });
});
