import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Dictionary } from 'src/app/common/models/dictionay.model';
import { SearchCitiesFormService } from 'src/app/services/search-cities-form.service';
import { CitiesActions } from 'src/app/state/cities/cities.actions';

@Component({
  selector: 'app-search-cities',
  templateUrl: './search-cities.component.html',
  styleUrls: ['./search-cities.component.css'],
  providers: [SearchCitiesFormService],
})
export class SearchCitiesComponent implements OnInit {
  searchForm: FormGroup;
  sortData: Dictionary[];
  timezoneData: Dictionary[];
  limitData: Dictionary[];

  constructor(
    private store: Store,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formService: SearchCitiesFormService
  ) {}

  ngOnInit() {
    this.initSearchFormData();
    this.activatedRoute.params.subscribe((params) => {
      this.handlAactivatedRouteParams(params);
    });
  }

  initSearchFormData() {
    this.searchForm = this.formService.createform();
    this.sortData = this.formService.sortData;
    this.timezoneData = this.formService.timezoneData;
    this.limitData = this.formService.limitData;
  }

  handlAactivatedRouteParams(params: any) {
    if (!params) {
      return;
    }
    this.formService.appendForm(params);
    this.store.dispatch(new CitiesActions.GetAllRequest(params));
  }

  search(filters: any) {
    for (const [key, value] of Object.entries(filters)) {
      if (!value) delete filters[key];
    }
    if (filters?.countryIdsArray) {
      filters.countryIds = filters.countryIdsArray.join(',');
      delete filters.countryIdsArray;
    }
    if (filters?.excludedCountryIdsArray) {
      filters.excludedCountryIds = filters.excludedCountryIdsArray.join(',');
      delete filters.excludedCountryIdsArray;
    }
    this.router.navigate(['search', filters]);
  }
}
