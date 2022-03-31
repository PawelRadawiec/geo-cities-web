import { Injectable } from '@angular/core';
import { Action, State, StateContext, Store } from '@ngxs/store';
import { mergeMap } from 'rxjs';
import { CitiesService } from 'src/app/services/cities/cities.service';
import { CitiesStateModel } from './cities-state.model';
import { CitiesActions } from './cities.actions';

@State<CitiesStateModel>({
  name: 'cities',
  defaults: {
    cities: [],
  },
})
@Injectable()
export class CitiesState {
  constructor(private store: Store, private citiesService: CitiesService) {}

  @Action(CitiesActions.GetAllRequest)
  getAllRequest(
    _: StateContext<CitiesStateModel>,
    { filters }: CitiesActions.GetAllRequest
  ) {
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
    return this.citiesService
      .getAll(filters)
      .pipe(
        mergeMap(({ data }) =>
          this.store.dispatch(new CitiesActions.SetCities(data))
        )
      );
  }

  @Action(CitiesActions.SetCities)
  setCities(
    ctx: StateContext<CitiesStateModel>,
    { cities }: CitiesActions.SetCities
  ) {
    if (!cities) cities = [];
    ctx.patchState({
      cities,
    });
  }
}
