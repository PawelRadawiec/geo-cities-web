import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './components/modules/account/account.component';
import { HomeComponent } from './components/modules/home/home.component';
import { SearchCitiesComponent } from './components/modules/search-cities/search-cities.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'search',
    component: SearchCitiesComponent
  },
  {
    path: 'account',
    component: AccountComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
