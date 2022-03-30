import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { City } from 'src/app/common/models/city.model';
import { CitiesSelectors } from 'src/app/state/cities/cities.selectors';

@Component({
  selector: 'app-cities-result-list',
  templateUrl: './cities-result-list.component.html',
  styleUrls: ['./cities-result-list.component.css'],
})
export class CitiesResultListComponent implements OnInit {
  @Select(CitiesSelectors.cities) cities$: Observable<City[]>;

  constructor() {}

  ngOnInit() {}
}
