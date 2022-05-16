import { Inject, Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { mergeMap } from 'rxjs';
import { CITIES_SERVICE_TOKEN } from 'src/app/app.module';
import { CitiesService } from 'src/app/services/cities/cities-service';
import { CitiesStateModel } from './cities-state.model';
import { CitiesActions } from './cities.actions';

@State<CitiesStateModel>({
  name: 'cities',
  defaults: {
    cityDetails: null,
    cities: [],
  },
})
@Injectable()
export class CitiesState {
  constructor(
    @Inject(CITIES_SERVICE_TOKEN) private citiesService: CitiesService
  ) {}

  @Action(CitiesActions.GetAllRequest)
  getAllRequest(
    ctx: StateContext<CitiesStateModel>,
    { filters }: CitiesActions.GetAllRequest
  ) {
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

  @Action(CitiesActions.GetDetailsRequest)
  getDetailsRequest(
    ctx: StateContext<CitiesStateModel>,
    { id }: CitiesActions.GetDetailsRequest
  ) {
    return this.citiesService
      .getById(id)
      .pipe(
        mergeMap((response) =>
          ctx.dispatch(new CitiesActions.GetDetailsResponse(response?.data))
        )
      );
  }

  @Action(CitiesActions.GetDetailsResponse)
  getDetailsResponse(
    ctx: StateContext<CitiesStateModel>,
    { city }: CitiesActions.GetDetailsResponse
  ) {
    ctx.patchState({
      cityDetails: city,
    });
  }
}
