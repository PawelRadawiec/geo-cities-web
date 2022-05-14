import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxsModule } from '@ngxs/store';
import { EMPTY } from 'rxjs';
import { CitiesState } from 'src/app/state/cities/cities.state';

import { SearchCitiesComponent } from './search-cities.component';

describe('SearchCitiesComponent', () => {
  let component: SearchCitiesComponent;
  let fixture: ComponentFixture<SearchCitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCitiesComponent ],
      imports: [NgxsModule.forRoot([CitiesState])],
      providers: [
        {
          provide: 'CitiesService',
          useValue: {
            getAll: (filters: any) => EMPTY,
          },
        },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
