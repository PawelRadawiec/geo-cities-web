import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Subscription } from 'rxjs';
import { CitiesActions } from 'src/app/state/cities/cities.actions';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent implements OnInit, OnDestroy {
  searchForm: FormGroup;
  subscription = new Subscription();

  constructor(private fb: FormBuilder, private store: Store) {}

  sortMockData = [
    { code: 'TEST_1', text: 'Test 1' },
    { code: 'TEST_2', text: 'Test 2' },
  ];

  timezoneMockData = [
    { code: 'TEST_1', text: 'Test 1' },
    { code: 'TEST_2', text: 'Test 2' },
  ];

  limitMockData = [
    { value: 5, text: '5' },
    { value: 10, text: '10' },
    { value: 50, text: '50' },
  ];

  ngOnInit() {
    this.initForm();
    this.subscription.add(
      this.searchForm.get('sort')?.valueChanges.subscribe((sort) => {
        console.log('sort: ', sort);
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  search() {
    this.store.dispatch(new CitiesActions.GetAllRequest({}));
  }

  initForm() {
    this.searchForm = this.fb.group({
      namePrefix: [],
      location: [],
      countryIds: [[]],
      excludedCountryIds: [[]],
      minPopulation: [],
      sort: [],
      timezone: [],
      limit: [5],
    });
  }
}
