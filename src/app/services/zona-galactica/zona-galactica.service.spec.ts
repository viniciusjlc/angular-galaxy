import { TestBed } from '@angular/core/testing';

import { ZonaGalacticaService } from './zona-galactica.service';

describe('ZonaGalacticaService', () => {
  let service: ZonaGalacticaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZonaGalacticaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
