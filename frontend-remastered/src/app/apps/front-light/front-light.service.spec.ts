import { TestBed } from '@angular/core/testing';

import { FrontLightService } from './front-light.service';

describe('FrontLightService', () => {
  let service: FrontLightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrontLightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
