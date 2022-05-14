import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AsideData } from '../modules/core/components/main-aside/main-aside.component';

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

  closeAside(component: any) {
    this._closeSubject.next({ component, data: {} });
  }

  get openSubject() {
    return this._openSubject.asObservable();
  }

  get closeSubject() {
    return this._closeSubject.asObservable();
  }
}
