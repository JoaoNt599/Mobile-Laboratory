import { TestBed } from '@angular/core/testing';

import { OsdrService } from './osdr.service';

describe('OsdrService', () => {
  let service: OsdrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OsdrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
