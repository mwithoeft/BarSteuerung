import { TestBed } from '@angular/core/testing';

import { CeilingLightService } from './ceiling-light.service';

describe('CeilingLightService', () => {
  let service: CeilingLightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CeilingLightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
