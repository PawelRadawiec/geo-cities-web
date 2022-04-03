import { Component, OnInit } from '@angular/core';
import { AsideService } from 'src/app/services/aside.service';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.css'],
})
export class CityDetailsComponent implements OnInit {
  data: any;

  constructor(private asideService: AsideService) {}

  ngOnInit() {}

  close() {
    this.asideService.closeAside();
  }
}
