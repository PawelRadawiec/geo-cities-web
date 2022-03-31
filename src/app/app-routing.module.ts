import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './pages/modules/account/account.component';
import { HomeComponent } from './pages/modules/home/home.component';
import { CitiesResolver } from './pages/modules/search-cities/resolvers/cities.resolver';
import { SearchCitiesComponent } from './pages/modules/search-cities/search-cities.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'search',
    component: SearchCitiesComponent,
    resolve: [CitiesResolver],
  },
  {
    path: 'account',
    component: AccountComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CitiesResolver],
})
export class AppRoutingModule {}
