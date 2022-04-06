import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';
import { HoverConfig } from '../common/models/hover-config';

@Directive({
  selector: '[ccHover]',
})
export class HoverDirective {
  @Input('ccHover') config: HoverConfig;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter')
  onMouseOver() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'transition', '0.3s');
    this.renderer.addClass(
      this.elementRef.nativeElement,
      this.config.hoverClass
    );
  }

  @HostListener('mouseleave')
  onMouseOut() {
    this.renderer.removeClass(
      this.elementRef.nativeElement,
      this.config.hoverClass
    );
  }
}
