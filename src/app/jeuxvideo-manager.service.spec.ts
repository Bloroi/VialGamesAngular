import { TestBed, inject } from '@angular/core/testing';

import { JeuxvideoManagerService } from './jeuxvideo-manager.service';

describe('JeuxvideoManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JeuxvideoManagerService]
    });
  });

  it('should be created', inject([JeuxvideoManagerService], (service: JeuxvideoManagerService) => {
    expect(service).toBeTruthy();
  }));
});
