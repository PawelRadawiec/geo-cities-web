import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchCitiesResponse } from 'src/app/common/models/search-cities-response.model';
import { CitiesService } from './cities-service';

@Injectable({
  providedIn: 'root',
})
export class HttpCitiesService implements CitiesService {
  private baseUrl = 'https://wft-geo-db.p.rapidapi.com/v1/geo';

  constructor(private http: HttpClient) {}

  getById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/cities/${id}`);
  }

  getAll(filters: any) {
    return this.http.get<SearchCitiesResponse>(`${this.baseUrl}/cities`, {
      params: filters,
    });
  }
}
