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
  getAllRequest({ filters }: CitiesActions.GetAllRequest) {
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
