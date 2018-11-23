import { TestBed } from '@angular/core/testing';

import { CandidateFilesService } from './candidate-files.service';

describe('CandidateFilesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CandidateFilesService = TestBed.get(CandidateFilesService);
    expect(service).toBeTruthy();
  });
});
