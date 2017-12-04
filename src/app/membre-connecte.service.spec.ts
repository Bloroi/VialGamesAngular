import { TestBed, inject } from '@angular/core/testing';

import { MembreConnecteService } from './membre-connecte.service';

describe('MembreConnecteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MembreConnecteService]
    });
  });

  it('should be created', inject([MembreConnecteService], (service: MembreConnecteService) => {
    expect(service).toBeTruthy();
  }));
});
