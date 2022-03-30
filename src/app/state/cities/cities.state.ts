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
        mergeMap((cities) =>
          this.store.dispatch(new CitiesActions.SetCities(cities))
        )
      );
  }

  @Action(CitiesActions.SetCities)
  setCities(
    ctx: StateContext<CitiesStateModel>,
    { cities }: CitiesActions.SetCities
  ) {
    if (!cities) cities = [];
    // for mock purpose
    const city = {
      id: 3350606,
      wikiDataId: 'Q24668',
      type: 'CITY',
      city: 'Aixirivall',
      name: 'Aixirivall',
      country: 'Andorra',
      countryCode: 'ad',
      region: 'Sant Julià de Lòria',
      regionCode: '06',
      latitude: 42.46245,
      longitude: 1.50209,
      population: 0,
    };
    for (let i = 0; i < 12; i++) {
      cities.push(city);
    }
    ctx.patchState({
      cities,
    });
  }
}
