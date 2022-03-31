import { TestBed } from '@angular/core/testing';
import { Actions, NgxsModule, ofActionDispatched, Store } from '@ngxs/store';
import { EMPTY, Observable, of, take } from 'rxjs';
import { City } from 'src/app/common/models/city.model';
import { SearchCitiesResponse } from 'src/app/common/models/search-cities-response.model';
import { CitiesService } from 'src/app/services/cities/cities-service';
import { CitiesActions } from '../cities.actions';
import { CitiesState } from '../cities.state';

describe('CitiesStateTest', () => {
  let actions$: Observable<any>;
  let store: Store;
  let citiesService: CitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([CitiesState])],
      providers: [
        {
          provide: 'CitiesService',
          useValue: {
            getAll: (filters: any) => EMPTY,
          },
        },
      ],
    });
    store = TestBed.inject(Store);
    actions$ = TestBed.inject(Actions);
    citiesService = TestBed.get('CitiesService');
  });

  it('should call getAll', () => {
    spyOn(citiesService, 'getAll').and.returnValue(of(null));
    store.dispatch(new CitiesActions.GetAllRequest({}));
    expect(citiesService.getAll).toHaveBeenCalled();
  });

  it('should disptach CitiesActions.SetCities', (done) => {
    const response = {} as SearchCitiesResponse;
    spyOn(citiesService, 'getAll').and.returnValue(of(response));
    actions$
      .pipe(ofActionDispatched(CitiesActions.SetCities))
      .subscribe((action) => {
        expect(action.constructor.name).toBe('SetCities');
        done();
      });
    store.dispatch(new CitiesActions.GetAllRequest({}));
  });

  it('should set cities', () => {
    const city = {} as City;
    store.dispatch(new CitiesActions.SetCities([city, city]));
    const cities = store.selectSnapshot(CitiesState).cities;
    expect(cities?.length).toBe(2);
  });

  it('should set empty array', () => {
    store.dispatch(new CitiesActions.SetCities(null));
    const cities = store.selectSnapshot(CitiesState).cities;
    expect(cities?.length).toBe(0);
  });

});
