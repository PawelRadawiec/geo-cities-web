import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  open = false;
  navStyle = 'nav-content__nav-bar--close';

  constructor() {}

  toggle() {
    this.open = !this.open;
    this.navStyle = `nav-content__nav-bar--${this.open ? 'open' : 'close'}`;
  }
}
