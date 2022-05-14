import { Component, OnDestroy, OnInit, Type, ViewChild } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { AsideDirective } from 'src/app/directives/aside.directive';
import { AsideService } from 'src/app/services/aside.service';


export interface AsideData {
  component: Type<any>;
  data: any;
}

@Component({
  selector: 'app-main-aside',
  templateUrl: './main-aside.component.html',
  styleUrls: ['./main-aside.component.css'],
})
export class MainAsideComponent implements OnInit, OnDestroy {
  @ViewChild(AsideDirective, { static: true }) asideDirective: AsideDirective;
  destroy$ = new Subject<boolean>();

  constructor(private asideService: AsideService) {}

  ngOnInit() {
    this.asideService.openSubject
      .pipe(takeUntil(this.destroy$))
      .subscribe((asideData: AsideData) => {
        this.handleOpenSubject(asideData);
      });

    this.asideService.closeSubject
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.handleCloseSubject();
      });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  private handleOpenSubject(asideData: AsideData) {
    const viewContainerRef = this.asideDirective.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(asideData.component);
    componentRef.instance.data = asideData.data;
  }

  private handleCloseSubject() {
    this.asideDirective.viewContainerRef.clear();
  }
}
