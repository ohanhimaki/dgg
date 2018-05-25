import { TestBed, inject } from '@angular/core/testing';

import { CanvasHandleService } from './canvas-handle.service';

describe('CanvasHandleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanvasHandleService]
    });
  });

  it('should be created', inject([CanvasHandleService], (service: CanvasHandleService) => {
    expect(service).toBeTruthy();
  }));
});
