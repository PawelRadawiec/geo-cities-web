import { InjectionToken, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { CitiesState } from './state/cities/cities.state';
import { environment } from 'src/environments/environment';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth-interceptor';
import { HttpCitiesService } from './services/cities/http-cities.service';
import { SharedModule } from './modules/shared/shared.module';
import { CoreModule } from './modules/core/core.module';
import { AppRoutingModule } from './app-routing.module';

export const CITIES_SERVICE_TOKEN = new InjectionToken('CitiesService');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
    AppRoutingModule
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
