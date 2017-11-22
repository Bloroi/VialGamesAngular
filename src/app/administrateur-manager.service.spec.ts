import { TestBed, inject } from '@angular/core/testing';

import { AdministrateurManagerService } from './administrateur-manager.service';

describe('AdministrateurManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdministrateurManagerService]
    });
  });

  it('should be created', inject([AdministrateurManagerService], (service: AdministrateurManagerService) => {
    expect(service).toBeTruthy();
  }));
});
