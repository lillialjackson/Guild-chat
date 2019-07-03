import { TestBed } from '@angular/core/testing';

import { GcFirebaseService } from './gc-firebase.service';

describe('GcFirebaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GcFirebaseService = TestBed.get(GcFirebaseService);
    expect(service).toBeTruthy();
  });
});
