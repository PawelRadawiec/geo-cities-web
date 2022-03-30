import { Component, Input, OnInit } from '@angular/core';
import { City } from 'src/app/common/models/city.model';

@Component({
  selector: 'app-cities-result-list',
  templateUrl: './cities-result-list.component.html',
  styleUrls: ['./cities-result-list.component.css'],
})
export class CitiesResultListComponent implements OnInit {
  @Input() cities: City[];

  constructor() {}

  ngOnInit() {}
}
