import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/layout/header/header.component';
import { FooterComponent } from './pages/layout/footer/footer.component';
import { MainComponent } from './pages/layout/main/main.component';
import { SidebarComponent } from './pages/layout/sidebar/sidebar.component';
import { NavComponent } from './pages/layout/nav/nav.component';
import { HomeComponent } from './pages/modules/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchCitiesComponent } from './pages/modules/search-cities/search-cities.component';
import { AccountComponent } from './pages/modules/account/account.component';
import { SearchFormComponent } from './pages/modules/search-cities/components/search-form/search-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { CitiesState } from './state/cities/cities.state';
import { environment } from 'src/environments/environment';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CitiesResultListComponent } from './pages/modules/search-cities/components/cities-result-list/cities-result-list.component';
import { CityCardComponent } from './pages/modules/search-cities/components/city-card/city-card.component';
import { AuthInterceptor } from './interceptors/auth-interceptor';
import { HttpCitiesService } from './services/cities/http-cities.service';
import { CityDetailsComponent } from './pages/modules/aside/city-details/city-details.component';
import { MainAsideComponent } from './pages/modules/aside/main-aside/main-aside.component';
import { CitiesResultListWrapperComponent } from './pages/modules/search-cities/components/cities-result-list-wrapper/cities-result-list-wrapper.component';
import { SharedModule } from './modules/shared/shared.module';
import { CoreModule } from './modules/core/core.module';

export const CITIES_SERVICE_TOKEN = new InjectionToken('CitiesService');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SidebarComponent,
    NavComponent,
    HomeComponent,
    SearchCitiesComponent,
    AccountComponent,
    SearchFormComponent,
    CitiesResultListComponent,
    CityCardComponent,
    CityDetailsComponent,
    MainAsideComponent,
    CitiesResultListWrapperComponent,
  ],
  imports: [
    CoreModule,
    SharedModule,
    NgxsModule.forRoot([CitiesState], {
      developmentMode: !environment.production,
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: CITIES_SERVICE_TOKEN,
      useClass: HttpCitiesService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
