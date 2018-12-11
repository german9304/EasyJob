import { TestBed } from '@angular/core/testing';

import { CandidateInfoService } from './candidate-info.service';

describe('CandidateInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CandidateInfoService = TestBed.get(CandidateInfoService);
    expect(service).toBeTruthy();
  });
});
