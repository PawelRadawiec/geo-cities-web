import { InjectionToken, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/layout/header/header.component';
import { FooterComponent } from './pages/layout/footer/footer.component';
import { MainComponent } from './pages/layout/main/main.component';
import { SidebarComponent } from './pages/layout/sidebar/sidebar.component';
import { NavComponent } from './pages/layout/nav/nav.component';
import { HomeComponent } from './pages/modules/home/home.component';
import { AccountComponent } from './pages/modules/account/account.component';
import { NgxsModule } from '@ngxs/store';
import { CitiesState } from './state/cities/cities.state';
import { environment } from 'src/environments/environment';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth-interceptor';
import { HttpCitiesService } from './services/cities/http-cities.service';
import { CityDetailsComponent } from './pages/modules/aside/city-details/city-details.component';
import { MainAsideComponent } from './pages/modules/aside/main-aside/main-aside.component';
import { SharedModule } from './modules/shared/shared.module';
import { CoreModule } from './modules/core/core.module';
import { AppRoutingModule } from './app-routing.module';

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
    AccountComponent,
    CityDetailsComponent,
    MainAsideComponent,
  ],
  imports: [
    CoreModule,
    SharedModule,
    AppRoutingModule,
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
