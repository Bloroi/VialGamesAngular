import { TestBed, inject } from '@angular/core/testing';

import { DataJvServiceService } from './data-jv-service.service';

describe('DataJvServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataJvServiceService]
    });
  });

  it('should be created', inject([DataJvServiceService], (service: DataJvServiceService) => {
    expect(service).toBeTruthy();
  }));
});
