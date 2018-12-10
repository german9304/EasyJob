import { TestBed } from '@angular/core/testing';

import { CandidateJobsService } from './candidate-jobs.service';

describe('CandidateJobsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CandidateJobsService = TestBed.get(CandidateJobsService);
    expect(service).toBeTruthy();
  });
});
