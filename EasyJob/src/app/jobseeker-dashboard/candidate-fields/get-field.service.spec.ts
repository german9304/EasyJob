import { TestBed, inject } from '@angular/core/testing';

import { GetFieldService } from './get-field.service';

describe('GetFieldService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetFieldService]
    });
  });

  it('should be created', inject([GetFieldService], (service: GetFieldService) => {
    expect(service).toBeTruthy();
  }));
});
