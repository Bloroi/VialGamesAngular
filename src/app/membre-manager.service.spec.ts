import { TestBed, inject } from '@angular/core/testing';

import { MembreManagerService } from './membre-manager.service';

describe('MembreManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MembreManagerService]
    });
  });

  it('should be created', inject([MembreManagerService], (service: MembreManagerService) => {
    expect(service).toBeTruthy();
  }));
});
