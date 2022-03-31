import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { City } from 'src/app/common/models/city.model';
import { SearchCitiesResponse } from 'src/app/common/models/search-cities-response.model';

@Injectable({
  providedIn: 'root',
})
export class CitiesService {
  private baseUrl = 'https://wft-geo-db.p.rapidapi.com/v1/geo';

  constructor(private http: HttpClient) {}

  getAll(filters: any) {
    return this.http.get<SearchCitiesResponse>(`${this.baseUrl}/cities`, {params: filters});
  }
}
