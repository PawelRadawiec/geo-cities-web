import {
  Overlay,
  OverlayPositionBuilder,
  OverlayRef,
} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { SidebarComponent } from '../modules/core/components/sidebar/sidebar.component';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private overlayRef: OverlayRef;

  constructor(
    private overlay: Overlay,
    private positionBuilder: OverlayPositionBuilder
  ) {}

  open() {
    this.overlayRef = this.overlay.create({
      hasBackdrop: true,
      positionStrategy: this.positionBuilder.global().left().top('120px'),
    });
    this.overlayRef.backdropClick().subscribe(() => this.close());
    this.overlayRef.attach(new ComponentPortal(SidebarComponent));
  }

  close() {
    this.overlayRef.detach();
  }
}
