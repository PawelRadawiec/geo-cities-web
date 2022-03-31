import { Observable } from 'rxjs';
import { SearchCitiesResponse } from 'src/app/common/models/search-cities-response.model';

export interface CitiesService {
  getAll(filters: any): Observable<SearchCitiesResponse>;
}
