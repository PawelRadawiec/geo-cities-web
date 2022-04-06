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
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SearchCitiesComponent } from './pages/modules/search-cities/search-cities.component';
import { AccountComponent } from './pages/modules/account/account.component';
import { SearchFormComponent } from './pages/modules/search-cities/components/search-form/search-form.component';
import { MatInputModule } from '@angular/material/input';
import { InputComponent } from './pages/modules/shared/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { ChipsComponent } from './pages/modules/shared/chips/chips.component';
import { SelectComponent } from './pages/modules/shared/select/select.component';
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
import { AsideDirective } from './directives/aside.directive';
import { CitiesResultListWrapperComponent } from './pages/modules/search-cities/components/cities-result-list-wrapper/cities-result-list-wrapper.component';
import { HoverDirective } from './directives/hover-directive';

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
    InputComponent,
    ChipsComponent,
    SelectComponent,
    CitiesResultListComponent,
    CityCardComponent,
    CityDetailsComponent,
    MainAsideComponent,
    AsideDirective,
    CitiesResultListWrapperComponent,
    HoverDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatSelectModule,
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
