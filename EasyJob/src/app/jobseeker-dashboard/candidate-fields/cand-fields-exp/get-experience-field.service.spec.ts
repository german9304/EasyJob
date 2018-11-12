import { TestBed, inject } from '@angular/core/testing';

import { GetExperienceFieldService } from './get-experience-field.service';

describe('GetExperienceFieldService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetExperienceFieldService]
    });
  });

  it('should be created', inject(
    [GetExperienceFieldService],
    (service: GetExperienceFieldService) => {
      expect(service).toBeTruthy();
    }
  ));
});
