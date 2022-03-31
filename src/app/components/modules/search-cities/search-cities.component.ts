import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { City } from 'src/app/common/models/city.model';
import { CitiesActions } from 'src/app/state/cities/cities.actions';
import { CitiesSelectors } from 'src/app/state/cities/cities.selectors';

@Component({
  selector: 'app-search-cities',
  templateUrl: './search-cities.component.html',
  styleUrls: ['./search-cities.component.css'],
})
export class SearchCitiesComponent implements OnInit {
  @Select(CitiesSelectors.cities) cities$: Observable<City[]>;

  sortData = [
    { code: 'countryCode', text: 'Country code' },
    { code: 'elevation', text: 'Elevation' },
    { code: 'name', text: 'Name' },
    { code: 'population', text: 'Population' },
  ];

  timezoneData = [
    { code: 'TEST_1', text: 'Test 1' },
    { code: 'TEST_2', text: 'Test 2' },
  ];

  limitData = [
    { code: '5', text: '5' },
    { code: '10', text: '10' },
    { code: '50', text: '50' },
  ];

  constructor(private store: Store) {}

  ngOnInit() {}

  search(filters: any) {
    this.store.dispatch(new CitiesActions.GetAllRequest(filters));
  }
}
