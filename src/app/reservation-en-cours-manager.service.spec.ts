import { TestBed, inject } from '@angular/core/testing';

import { ReservationEnCoursManagerService } from './reservation-en-cours-manager.service';

describe('ReservationEnCoursManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReservationEnCoursManagerService]
    });
  });

  it('should be created', inject([ReservationEnCoursManagerService], (service: ReservationEnCoursManagerService) => {
    expect(service).toBeTruthy();
  }));
});
