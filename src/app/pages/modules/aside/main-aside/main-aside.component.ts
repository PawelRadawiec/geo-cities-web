import { Component, OnInit, Type, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { AsideDirective } from 'src/app/directives/aside.directive';
import { AsideService } from 'src/app/services/aside.service';
import { CityDetailsComponent } from '../city-details/city-details.component';

export interface AsideData {
  component: Type<any>;
  data: any;
}

@Component({
  selector: 'app-main-aside',
  templateUrl: './main-aside.component.html',
  styleUrls: ['./main-aside.component.css'],
})
export class MainAsideComponent implements OnInit {
  @ViewChild(AsideDirective, { static: true }) asideDirective: AsideDirective;

  subscription = new Subscription();

  constructor(private asideService: AsideService) {}

  ngOnInit() {
    this.subscription.add(
      this.asideService.openSubject.subscribe((asideData: AsideData) => {
        this.handleOpenSubject(asideData);
      })
    );
    this.subscription.add(
      this.asideService.closeSubject.subscribe(() => {
        this.handleCloseSubject();
      })
    );
  }

  private handleOpenSubject(asideData: AsideData) {
    const viewContainerRef = this.asideDirective.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent<CityDetailsComponent>(
      asideData.component
    );
    componentRef.instance.data = asideData.data;
  }

  private handleCloseSubject() {
    this.asideDirective.viewContainerRef.clear();
  }
}
