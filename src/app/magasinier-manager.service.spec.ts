import { TestBed, inject } from '@angular/core/testing';

import { MagasinierManagerService } from './magasinier-manager.service';

describe('MagasinierManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagasinierManagerService]
    });
  });

  it('should be created', inject([MagasinierManagerService], (service: MagasinierManagerService) => {
    expect(service).toBeTruthy();
  }));
});
