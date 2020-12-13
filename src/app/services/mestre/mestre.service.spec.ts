import { TestBed } from '@angular/core/testing';

import { MestreService } from './mestre.service';

describe('MestreService', () => {
  let service: MestreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MestreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
