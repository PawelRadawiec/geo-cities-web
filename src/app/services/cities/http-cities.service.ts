import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchCitiesResponse } from 'src/app/common/models/search-cities-response.model';
import { CitiesService } from './cities-service';

@Injectable({
  providedIn: 'root',
})
export class HttpCitiesService implements CitiesService {
  private baseUrl = 'https://wft-geo-db.p.rapidapi.com/v1/geo';

  constructor(private http: HttpClient) {}

  getAll(filters: any) {
    return this.http.get<SearchCitiesResponse>(`${this.baseUrl}/cities`, {params: filters});
  }
}
