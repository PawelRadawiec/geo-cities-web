import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor(private router: Router, private sidebar: SidebarService) {}

  ngOnInit() {}

  navigate(value: string) {
    this.router.navigate([value]).then(() => {
      this.sidebar.close();
    });
  }
}
