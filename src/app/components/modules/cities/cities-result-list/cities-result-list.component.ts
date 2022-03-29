import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/common/models/city.model';

@Component({
  selector: 'app-cities-result-list',
  templateUrl: './cities-result-list.component.html',
  styleUrls: ['./cities-result-list.component.css'],
})
export class CitiesResultListComponent implements OnInit {
  mockResults: City[] = [];

  constructor() {}

  ngOnInit() {
    this.appendMockResults();
  }

  appendMockResults() {
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

    for (let i = 0; i < 15; i++) {
      this.mockResults.push(city);
    }
  }
}
