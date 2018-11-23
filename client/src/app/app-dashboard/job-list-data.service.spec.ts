import { TestBed, inject } from '@angular/core/testing';

import { JobListDataService } from './job-list-data.service';

describe('JobListDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JobListDataService]
    });
  });

  it('should be created', inject([JobListDataService], (service: JobListDataService) => {
    expect(service).toBeTruthy();
  }));
});
