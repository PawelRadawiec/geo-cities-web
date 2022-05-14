import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitiesRoutingModule } from './cities-routing.module';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { SearchCitiesComponent } from './components/search-cities/search-cities.component';
import { CityCardComponent } from './components/city-card/city-card.component';
import { CitiesResultListWrapperComponent } from './components/cities-result-list-wrapper/cities-result-list-wrapper.component';
import { CitiesResultListComponent } from './components/cities-result-list/cities-result-list.component';
import { SharedModule } from '../shared/shared.module';
import { CityDetailsComponent } from './components/city-details/city-details.component';

@NgModule({
  declarations: [
    SearchFormComponent,
    SearchCitiesComponent,
    CityCardComponent,
    CitiesResultListWrapperComponent,
    CitiesResultListComponent,
    CityDetailsComponent
  ],
  imports: [CommonModule, CitiesRoutingModule, SharedModule],
  exports: [
    SearchFormComponent,
    SearchCitiesComponent,
    CityCardComponent,
    CitiesResultListWrapperComponent,
    CitiesResultListComponent,
    CityDetailsComponent
  ],
})
export class CitiesModule {}
