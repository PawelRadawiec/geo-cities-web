import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesResultListWrapperComponent } from './cities-result-list-wrapper.component';

describe('CitiesResultListWrapperComponent', () => {
  let component: CitiesResultListWrapperComponent;
  let fixture: ComponentFixture<CitiesResultListWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitiesResultListWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitiesResultListWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
