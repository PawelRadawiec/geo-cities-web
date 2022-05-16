import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Subscription } from 'rxjs';
import { SearchCitiesFormService } from 'src/app/services/search-cities-form.service';
import { CitiesActions } from 'src/app/state/cities/cities.actions';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent implements OnInit, OnDestroy {
  searchForm: FormGroup;
  subscription = new Subscription();

  constructor(
    private store: Store,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public formService: SearchCitiesFormService
  ) {}

  ngOnInit() {
    this.searchForm = this.formService.createform();
    console.log('searchForm: ', this.searchForm);
    this.subscription.add(
      this.searchForm.get('sort')?.valueChanges.subscribe((sort) => {
        console.log('sort: ', sort);
      })
    );
    this.subscription.add(
      this.activatedRoute.params.subscribe((params) => {
        this.handlAactivatedRouteParams(params);
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  handlAactivatedRouteParams(params: any) {
    if (!params) {
      return;
    }
    this.formService.appendForm(params);
    this.store.dispatch(new CitiesActions.GetAllRequest(params));
  }

  search() {
    const filters = this.searchForm.value;
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
    this.router.navigate(['cities/search', filters]);
  }
}
