import { Selector } from '@ngxs/store';
import { CitiesStateModel } from './cities-state.model';
import { CitiesState } from './cities.state';

export class CitiesSelectors {
  @Selector([CitiesState])
  static cities(state: CitiesStateModel) {
    return [...state?.cities, ...state?.cities, ...state?.cities] ?? [];
  }

  @Selector([CitiesState])
  static cityDetails(state: CitiesStateModel) {
    return state?.cityDetails;
  }
}
