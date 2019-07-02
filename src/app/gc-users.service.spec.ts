import { TestBed } from '@angular/core/testing';

import { GcUsersService } from './gc-users.service';

describe('GcUsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GcUsersService = TestBed.get(GcUsersService);
    expect(service).toBeTruthy();
  });
});
