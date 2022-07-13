import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { City } from 'src/app/common/models/city.model';
import { AsideOverlayService } from 'src/app/services/aside-overlay.service';
import { CitiesActions } from 'src/app/state/cities/cities.actions';
import { CitiesSelectors } from 'src/app/state/cities/cities.selectors';
import { CityDetailsComponent } from '../city-details/city-details.component';

@Component({
  selector: 'app-cities-result-list-wrapper',
  templateUrl: './cities-result-list-wrapper.component.html',
  styleUrls: ['./cities-result-list-wrapper.component.css'],
})
export class CitiesResultListWrapperComponent implements OnInit {
  @Select(CitiesSelectors.cities) cities$: Observable<City[]>;

  constructor(
    private store: Store,
    private asideService: AsideOverlayService
  ) {}

  ngOnInit() {}

  openInNew(city: City) {
    this.store
      .dispatch(new CitiesActions.GetDetailsRequest(city.id))
      .subscribe(() => {
        this.asideService.create(CityDetailsComponent);
      });
  }
}
