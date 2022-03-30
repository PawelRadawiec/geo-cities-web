import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { MainComponent } from './components/layout/main/main.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { NavComponent } from './components/layout/nav/nav.component';
import { HomeComponent } from './components/pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SearchCitiesComponent } from './components/pages/search-cities/search-cities.component';
import { AccountComponent } from './components/pages/account/account.component';
import { SearchFormComponent } from './components/modules/cities/search-form/search-form.component';
import { MatInputModule } from '@angular/material/input';
import { InputComponent } from './components/modules/shared/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { ChipsComponent } from './components/modules/shared/chips/chips.component';
import { SelectComponent } from './components/modules/shared/select/select.component';
import { CitiesResultListComponent } from './components/modules/cities/cities-result-list/cities-result-list.component';
import { CityCardComponent } from './components/modules/cities/city-card/city-card.component';
import { NgxsModule } from '@ngxs/store';
import { CitiesState } from './state/cities/cities.state';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';

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
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
