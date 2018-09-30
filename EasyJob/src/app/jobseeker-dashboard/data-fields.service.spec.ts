import { TestBed, inject } from '@angular/core/testing';

import { DataFieldsService } from './data-fields.resolver.service';

describe('DataFieldsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataFieldsService]
    });
  });

  it('should be created', inject([DataFieldsService], (service: DataFieldsService) => {
    expect(service).toBeTruthy();
  }));
});
