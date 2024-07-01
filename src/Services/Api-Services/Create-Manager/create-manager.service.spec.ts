import { TestBed } from '@angular/core/testing';

import { CreateManagerService } from './create-manager.service';

describe('CreateManagerService', () => {
  let service: CreateManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
