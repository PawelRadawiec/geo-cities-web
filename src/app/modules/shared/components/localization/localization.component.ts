import { Component, Input, OnInit } from '@angular/core';
import { MapMarker } from '@angular/google-maps';
import { LocalizationData } from 'src/app/common/models/google-map-data.model';

@Component({
  selector: 'app-localization',
  templateUrl: './localization.component.html',
  styleUrls: ['./localization.component.css'],
})
export class LocalizationComponent implements OnInit {
  @Input() localization: LocalizationData;

  center: google.maps.LatLngLiteral;
  marker: any;

  constructor() {}

  ngOnInit() {
    const { latitude, longitude } = this.localization;
    this.center = {
      lat: latitude,
      lng: longitude,
    };
    this.marker = {
      position: {
        lat: latitude,
        lng: longitude,
      },
    };
  }
}
