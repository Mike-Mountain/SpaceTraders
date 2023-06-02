import { TestBed } from '@angular/core/testing';

import { SystemState } from './system.state';

describe('SystemService', () => {
  let service: SystemState;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SystemState);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
