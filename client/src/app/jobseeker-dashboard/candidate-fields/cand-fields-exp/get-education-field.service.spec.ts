import { TestBed } from '@angular/core/testing';

import { GetEducationFieldService } from './get-education-field.service';

describe('GetEducationFieldService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetEducationFieldService = TestBed.get(GetEducationFieldService);
    expect(service).toBeTruthy();
  });
});
