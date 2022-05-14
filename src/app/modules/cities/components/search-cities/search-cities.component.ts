import { Component, OnInit } from '@angular/core';
import { SearchCitiesFormService } from 'src/app/services/search-cities-form.service';

@Component({
  selector: 'app-search-cities',
  templateUrl: './search-cities.component.html',
  styleUrls: ['./search-cities.component.css'],
  providers: [SearchCitiesFormService],
})
export class SearchCitiesComponent {
  constructor() {}
}
