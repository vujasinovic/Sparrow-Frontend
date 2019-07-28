import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NavigationComponent} from './navigation/navigation.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {FormsModule} from '@angular/forms';
import {Globals} from './globals';
import {AuthService} from './login/auth.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HttpConfigInterceptor} from './httpconfig.interceptor';
import {LoginGuardService} from './login/login-guard';
import {HotelComponent} from "./hotels/hotel.component";
import {HotelProfileComponent} from "./hotel-profile/hotel-profile.component";
import {HotelReservationComponent} from "./hotel-reservation/hotel-reservation.component";
import {HotelEditComponent} from "./hotel-edit/hotel-edit.component";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    LoginComponent,
    HotelComponent,
    HotelProfileComponent,
    HotelReservationComponent,
    HotelEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [Globals, AuthService, LoginGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConfigInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
