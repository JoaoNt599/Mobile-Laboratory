import { TestBed } from '@angular/core/testing';

import { DonkiService } from './donki.service';

describe('DonkiService', () => {
  let service: DonkiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonkiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
