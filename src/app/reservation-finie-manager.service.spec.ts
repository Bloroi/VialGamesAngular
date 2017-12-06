import { TestBed, inject } from '@angular/core/testing';

import { ReservationFinieManagerService } from './reservation-finie-manager.service';

describe('ReservationFinieManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReservationFinieManagerService]
    });
  });

  it('should be created', inject([ReservationFinieManagerService], (service: ReservationFinieManagerService) => {
    expect(service).toBeTruthy();
  }));
});
