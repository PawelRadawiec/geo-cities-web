import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { City } from 'src/app/common/models/city.model';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.css'],
})
export class CityCardComponent implements OnInit {
  @Input() city: City;
  @Output() openInNew = new EventEmitter<City>();

  constructor() {}

  ngOnInit() {}

  openInNewClick() {
    this.openInNew.emit(this.city);
  }
}
