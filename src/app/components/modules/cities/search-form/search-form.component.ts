import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent implements OnInit, OnDestroy {
  searchForm: FormGroup;
  subscription = new Subscription();

  constructor(private fb: FormBuilder) {}

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
    this.subscription.add(
      this.searchForm.get('sort')?.valueChanges.subscribe((sort) => {
        console.log('sort: ', sort);
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
