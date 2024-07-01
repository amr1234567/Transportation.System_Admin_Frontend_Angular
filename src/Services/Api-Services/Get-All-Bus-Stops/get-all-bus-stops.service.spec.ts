import { TestBed } from '@angular/core/testing';

import { GetAllBusStopsService } from "./get-all-bus-stops.service";

describe('GetAllBusStopsService', () => {
  let service: GetAllBusStopsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllBusStopsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
