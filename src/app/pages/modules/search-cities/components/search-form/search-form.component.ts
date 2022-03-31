import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Dictionary } from 'src/app/common/models/dictionay.model';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent implements OnInit, OnDestroy {
  @Input() sortData: Dictionary[];
  @Input() timezoneData: Dictionary[];
  @Input() limitData: Dictionary[];
  @Output() onSearch = new EventEmitter();

  searchForm: FormGroup;
  subscription = new Subscription();

  constructor(private fb: FormBuilder) {}

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
    this.onSearch.emit(this.searchForm.value);
  }

  initForm() {
    this.searchForm = this.fb.group({
      namePrefix: [],
      location: [],
      countryIdsArray: [[]],
      excludedCountryIds: [[]],
      minPopulation: [],
      sort: [],
      timezone: [],
      limit: [],
    });
  }
}
