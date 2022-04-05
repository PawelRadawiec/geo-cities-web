import { TestBed } from '@angular/core/testing';

import { SearchCitiesFormService } from './search-cities-form.service';

describe('SearchCitiesFormService', () => {
  let service: SearchCitiesFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchCitiesFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
