import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AppAside } from 'src/app/common/models/app-aside.model';
import { AsideOverlayService } from 'src/app/services/aside/aside-overlay.service';
import { CitiesSelectors } from 'src/app/state/cities/cities.selectors';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.css'],
})
export class CityDetailsComponent implements OnInit, AppAside {
  @Select(CitiesSelectors.cityDetails) city$: Observable<any>;
  name = 'City Details';

  constructor(private asideService: AsideOverlayService) {}

  ngOnInit() {}

  close() {
    this.asideService.close();
  }
}
