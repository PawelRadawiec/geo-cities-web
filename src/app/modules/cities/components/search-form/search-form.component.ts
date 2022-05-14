import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Dictionary } from 'src/app/common/models/dictionay.model';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent implements OnInit, OnChanges, OnDestroy {
  @Input() form: FormGroup;
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

  ngOnChanges(changes: SimpleChanges) {
    if (changes['form']) {
      this.initForm();
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  search() {
    this.onSearch.emit(this.searchForm.value);
  }

  initForm() {
    this.searchForm = this.form
      ? this.form
      : this.fb.group({
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