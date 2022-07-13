import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { map, Observable, tap } from 'rxjs';
import { AppAside } from 'src/app/common/models/app-aside.model';
import { LocalizationData } from 'src/app/common/models/google-map-data.model';
import { AsideOverlayService } from 'src/app/services/aside/aside-overlay.service';
import { CitiesSelectors } from 'src/app/state/cities/cities.selectors';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.css'],
})
export class CityDetailsComponent implements OnInit, AppAside {
  @Select(CitiesSelectors.cityDetails) city$: Observable<any>;
  localization$: Observable<LocalizationData>;

  name = 'City Details';

  constructor(private asideService: AsideOverlayService) {}

  ngOnInit() {
    this.localization$ = this.city$.pipe(
      map(({ latitude, longitude }) => ({ longitude, latitude }))
    );
  }

  close() {
    this.asideService.close();
  }
}
