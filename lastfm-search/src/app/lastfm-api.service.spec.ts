import { TestBed } from '@angular/core/testing';

import { LastfmApiService } from './lastfm-api.service';

describe('LastfmApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LastfmApiService = TestBed.get(LastfmApiService);
    expect(service).toBeTruthy();
  });
});
