import { TestBed } from '@angular/core/testing';

import { EnrollBusStopService } from './enroll-bus-stop.service';

describe('EnrollBusStopService', () => {
  let service: EnrollBusStopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnrollBusStopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
