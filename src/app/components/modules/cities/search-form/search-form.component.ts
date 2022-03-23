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

  ngOnInit() {
    this.searchForm = this.fb.group({
      city: [],
    });
    this.subscription.add(
      this.searchForm.get('city')?.valueChanges.subscribe((city) => {
        console.log('city: ', city);
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
