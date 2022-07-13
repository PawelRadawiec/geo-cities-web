import {
  Overlay,
  OverlayPositionBuilder,
  OverlayRef,
} from '@angular/cdk/overlay';
import { ComponentPortal, ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { AppAside } from 'src/app/common/models/app-aside.model';


@Injectable({
  providedIn: 'root',
})
export class AsideOverlayService {
  private overlayRef: OverlayRef;

  constructor(
    private overlay: Overlay,
    private positionBuilder: OverlayPositionBuilder
  ) {}

  create(component: ComponentType<AppAside>) {
    if (this.overlayRef) {
      this.close();
    }
    this.overlayRef = this.overlay.create({
      hasBackdrop: true,
      positionStrategy: this.positionBuilder.global().right(),
    });
    const asidePortal = new ComponentPortal(component);
    this.overlayRef.attach(asidePortal);
  }

  close() {
    this.overlayRef.detach();
  }
}
