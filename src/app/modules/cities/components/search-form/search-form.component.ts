import { CdkConnectedOverlay, ConnectedPosition } from '@angular/cdk/overlay';
import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { filter, map, merge, Observable, Subject, Subscription } from 'rxjs';
import { SearchCitiesFormService } from 'src/app/services/search-cities-form.service';
import { CitiesActions } from 'src/app/state/cities/cities.actions';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent implements OnInit, OnDestroy {
  show$: Observable<boolean>;
  searchForm: UntypedFormGroup;
  subscription = new Subscription();
  positions: ConnectedPosition[] = [
    {
      originX: 'center',
      originY: 'bottom',
      overlayX: 'center',
      overlayY: 'top',
    },
  ];

  @ViewChild(CdkConnectedOverlay, { static: true })
  private cdkConnected: CdkConnectedOverlay;
  private filterClick = new Subject<boolean>();
  readonly filterClick$ = this.filterClick.asObservable();

  constructor(
    private store: Store,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public formService: SearchCitiesFormService
  ) {}

  ngOnInit() {
    this.searchForm = this.formService.createform();
    this.subscription.add(
      this.activatedRoute.params.subscribe((params) => {
        this.handlAactivatedRouteParams(params);
      })
    );
    this.show$ = merge(
      this.filterClick$,
      this.cdkConnected.overlayKeydown.pipe(
        filter(({ code }) => code?.toUpperCase() === 'ESCAPE'),
        map(() => false)
      )
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  handlAactivatedRouteParams(params: any) {
    if (!params) {
      return;
    }
    this.formService.appendForm(params);
    this.store.dispatch(new CitiesActions.GetAllRequest(params));
  }

  search() {
    this.router.navigate(['cities/search', this.formService.getFilters()]);
  }

  showFilters(open: boolean) {
    this.filterClick.next(open);
  }

  cleanForm() {
    this.searchForm = this.formService.createform();
  }
}
