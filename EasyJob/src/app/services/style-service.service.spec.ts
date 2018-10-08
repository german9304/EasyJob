import { TestBed, inject } from '@angular/core/testing';

import { StyleServiceService } from './style-service.service';

describe('StyleServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StyleServiceService]
    });
  });

  it('should be created', inject([StyleServiceService], (service: StyleServiceService) => {
    expect(service).toBeTruthy();
  }));
});
