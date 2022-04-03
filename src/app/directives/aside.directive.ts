import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[asideDirective]',
})
export class AsideDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
