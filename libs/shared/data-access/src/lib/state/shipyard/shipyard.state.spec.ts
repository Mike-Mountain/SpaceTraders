import { TestBed } from '@angular/core/testing';

import { ShipyardState } from './shipyard.state';

describe('ShipyardService', () => {
  let service: ShipyardState;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShipyardState);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
