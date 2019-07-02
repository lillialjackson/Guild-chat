import { TestBed } from '@angular/core/testing';

import { GcMessageService } from './gc-message.service';

describe('GcMessageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GcMessageService = TestBed.get(GcMessageService);
    expect(service).toBeTruthy();
  });
});
