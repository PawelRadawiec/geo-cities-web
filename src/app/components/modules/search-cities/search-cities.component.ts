import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { City } from 'src/app/common/models/city.model';
import { CitiesSelectors } from 'src/app/state/cities/cities.selectors';

@Component({
  selector: 'app-search-cities',
  templateUrl: './search-cities.component.html',
  styleUrls: ['./search-cities.component.css']
})
export class SearchCitiesComponent implements OnInit {
  @Select(CitiesSelectors.cities) cities$: Observable<City[]>;

  constructor() { }

  ngOnInit() {
  }

}
