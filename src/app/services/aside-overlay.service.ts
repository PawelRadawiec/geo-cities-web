import {
  Overlay,
  OverlayPositionBuilder,
  OverlayRef,
} from '@angular/cdk/overlay';
import { ComponentPortal, ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';

export interface AppAside {
  name: string;
  close: () => void;
}

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
