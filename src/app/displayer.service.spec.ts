import { TestBed, inject } from '@angular/core/testing';

import { DisplayerService } from './displayer.service';

describe('DisplayerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DisplayerService]
    });
  });

  it('should be created', inject([DisplayerService], (service: DisplayerService) => {
    expect(service).toBeTruthy();
  }));
});
