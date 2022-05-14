import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CityDetailsComponent } from '../modules/cities/components/city-details/city-details.component';
import { AsideData } from '../pages/modules/aside/main-aside/main-aside.component';

@Injectable({
  providedIn: 'root',
})
export class AsideService {
  private _openSubject = new Subject<AsideData>();
  private _closeSubject = new Subject<AsideData>();

  constructor() {}

  openAside(asideData: AsideData) {
    this._openSubject.next(asideData);
  }

  closeAside() {
    this._closeSubject.next({ component: CityDetailsComponent, data: {} });
  }

  get openSubject() {
    return this._openSubject.asObservable();
  }

  get closeSubject() {
    return this._closeSubject.asObservable();
  }

}
