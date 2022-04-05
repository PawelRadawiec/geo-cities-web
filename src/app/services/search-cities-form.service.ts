import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable()
export class SearchCitiesFormService {
  private _searchForm: FormGroup;

  private _sortData = [
    { code: 'countryCode', text: 'Country code' },
    { code: 'elevation', text: 'Elevation' },
    { code: 'name', text: 'Name' },
    { code: 'population', text: 'Population' },
  ];

  private _timezoneData = [
    { code: 'TEST_1', text: 'Test 1' },
    { code: 'TEST_2', text: 'Test 2' },
  ];

  private _limitData = [
    { code: '5', text: '5' },
    { code: '10', text: '10' },
    { code: '50', text: '50' },
  ];

  constructor(private fb: FormBuilder) {}

  appendForm(params: any) {
    if (!this.searchForm) {
      return;
    }
    this._searchForm.get('namePrefix').setValue(params.namePrefix ?? null);
    this._searchForm.get('location').setValue(params.location ?? null);
    this.searchForm
      .get('countryIdsArray')
      .setValue(params.countryIdsArray ?? null);
    this._searchForm
      .get('excludedCountryIds')
      .setValue(params.excludedCountryIds ?? null);
    this._searchForm
      .get('minPopulation')
      .setValue(params.minPopulation ?? null);
    this._searchForm.get('sort').setValue(params.sort ?? null);
    this._searchForm.get('timezone').setValue(params.timezone ?? null);
    this._searchForm.get('limit').setValue(params.limit ?? null);
  }

  createform() {
    this._searchForm = this.fb.group({
      namePrefix: [],
      location: [],
      countryIdsArray: [[]],
      excludedCountryIds: [[]],
      minPopulation: [],
      sort: [],
      timezone: [],
      limit: [],
    });
    return this._searchForm;
  }

  get searchForm() {
    return this._searchForm;
  }

  get sortData() {
    return this._sortData;
  }

  get timezoneData() {
    return this._timezoneData;
  }

  get limitData() {
    return this._limitData;
  }
}
