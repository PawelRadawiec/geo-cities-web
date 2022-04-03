import { Component, Input, OnInit } from '@angular/core';
import { City } from 'src/app/common/models/city.model';
import { AsideService } from 'src/app/services/aside.service';
import { CityDetailsComponent } from '../../../aside/city-details/city-details.component';

@Component({
  selector: 'app-cities-result-list',
  templateUrl: './cities-result-list.component.html',
  styleUrls: ['./cities-result-list.component.css'],
})
export class CitiesResultListComponent implements OnInit {
  @Input() cities: City[];

  constructor(private asideService: AsideService) {}

  ngOnInit() {}

  openInNew(city: City) {
    this.asideService.openAside({
      component: CityDetailsComponent,
      data: city,
    });
  }
}
