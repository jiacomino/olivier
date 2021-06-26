import { TestBed } from '@angular/core/testing';

import { SharedRayonService } from './shared-rayon.service';

describe('SharedRayonService', () => {
  let service: SharedRayonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedRayonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
