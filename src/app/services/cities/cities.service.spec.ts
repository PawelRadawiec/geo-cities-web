import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { HttpCitiesService } from './http-cities.service';

describe('CitiesService', () => {
  let service: HttpCitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(HttpCitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
