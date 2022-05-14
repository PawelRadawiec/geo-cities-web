import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchCitiesComponent } from './components/search-cities/search-cities.component';
import { CitiesResolver } from './resolvers/cities.resolver';

const routes: Routes = [
  {
    path: 'search',
    component: SearchCitiesComponent,
    resolve: [CitiesResolver],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CitiesResolver],
})
export class CitiesRoutingModule {}
