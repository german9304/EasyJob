import { TestBed, inject } from '@angular/core/testing';

import { CandidateFieldsService } from './candidate-fields.service';

describe('CandidateFieldsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CandidateFieldsService]
    });
  });

  it('should be created', inject([CandidateFieldsService], (service: CandidateFieldsService) => {
    expect(service).toBeTruthy();
  }));
});
