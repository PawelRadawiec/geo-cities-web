import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { Store } from '@ngxs/store';
import { EMPTY } from 'rxjs';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { SearchCitiesFormService } from 'src/app/services/search-cities-form.service';

import { SearchFormComponent } from './search-form.component';

fdescribe('SearchFormComponent', () => {
  let component: SearchFormComponent;
  let fixture: ComponentFixture<SearchFormComponent>;
  let el: DebugElement;
  let formService: any;

  beforeEach(async () => {
    const formServiceSpy = jasmine.createSpyObj('SearchCitiesFormService', [
      'createform',
      'searchForm',
    ]);
    await TestBed.configureTestingModule({
      declarations: [SearchFormComponent],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        SharedModule,
        BrowserAnimationsModule,
      ],
      providers: [
        {
          provide: 'CitiesService',
          useValue: {
            getAll: (filters: any) => EMPTY,
          },
        },
        {
          provide: Store,
          useValue: {},
        },
        {
          provide: SearchCitiesFormService,
          useValue: formServiceSpy,
        },
      ],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(SearchFormComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;
        formService = TestBed.inject(SearchCitiesFormService);
        formService.createform.and.returnValue(getEmptySearchForm());
      });
  });

  it('should create component', () => {
    expect(component).toBeDefined();
  });

  it('should init search form ', () => {
    fixture.detectChanges();
    expect(component.searchForm).toBeDefined();
  });

  it('should contains 3 app-inputs', () => {
    const appInputs = el.queryAll(By.css('app-input'));

    expect(appInputs.length).toBe(3);
    expect(appInputs[0].nativeElement.getAttribute('formcontrolname')).toBe(
      'namePrefix'
    );
    expect(appInputs[1].nativeElement.getAttribute('formcontrolname')).toBe(
      'location'
    );
    expect(appInputs[2].nativeElement.getAttribute('formcontrolname')).toBe(
      'minPopulation'
    );
  });

  it('should contains 2 app-chips', () => {
    const appChips = el.queryAll(By.css('app-chips'));

    expect(appChips.length).toBe(2);
    expect(appChips[0].nativeElement.getAttribute('formcontrolname')).toBe(
      'countryIdsArray'
    );
    expect(appChips[1].nativeElement.getAttribute('formcontrolname')).toBe(
      'excludedCountryIds'
    );
  });

  it('should contains 3 app-selects', () => {
    const appSelects = el.queryAll(By.css('app-select'));

    expect(appSelects.length).toBe(3);
    expect(appSelects[0].nativeElement.getAttribute('formcontrolname')).toBe(
      'sort'
    );
    expect(appSelects[1].nativeElement.getAttribute('formcontrolname')).toBe(
      'timezone'
    );
    expect(appSelects[2].nativeElement.getAttribute('formcontrolname')).toBe(
      'limit'
    );
  });
});

const getEmptySearchForm = () => {
  return new FormGroup({
    namePrefix: new FormControl(),
    location: new FormControl(),
    countryIdsArray: new FormControl(),
    excludedCountryIds: new FormControl(),
    minPopulation: new FormControl(),
    sort: new FormControl(),
    timezone: new FormControl(),
    limit: new FormControl(),
  });
};
