import { Inject, Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { mergeMap } from 'rxjs';
import { CitiesService } from 'src/app/services/cities/cities-service';
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
  constructor(@Inject('CitiesService') private citiesService: CitiesService) {}

  @Action(CitiesActions.GetAllRequest)
  getAllRequest(
    ctx: StateContext<CitiesStateModel>,
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
        mergeMap(({ data }) => ctx.dispatch(new CitiesActions.SetCities(data)))
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
