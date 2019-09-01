import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NavigationComponent} from './navigation/navigation.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Globals} from './globals';
import {AuthService} from './login/auth.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HttpConfigInterceptor} from './httpconfig.interceptor';
import {LoginGuardService} from './login/login-guard';
import {HotelComponent} from './hotels/hotel.component';
import {HotelProfileComponent} from './hotel-profile/hotel-profile.component';
import {RegisterComponent} from './register/register.component';
import {RegisterService} from './register/register.service';
import {HotelReservationComponent} from './hotel-reservation/hotel-reservation.component';
import {HotelEditComponent} from './hotel-edit/hotel-edit.component';
import {SystemAdministratorComponent} from './system-administrator/system-administrator.component';
import {HotelService} from './hotels/hotel.service';
import {HotelProfileService} from './hotel-profile/hotel-profile.service';
import {FriendsComponent} from './friends/friends.component';
import {FriendsService} from './friends/friends.service';
import {HotelRoomEditComponent} from './hotel-room-edit/hotel-room-edit.component';
import {AuthenticatedGuardService} from './login/auth-guard';
import {UserSearchComponent} from './user/user-search.component';
import {UserSearchService} from './user/user-search.service';
import {AgmCoreModule} from '@agm/core';
import {UserReservationsComponent} from "./user-reservations/user-reservations.component";
import {UserReservationsService} from "./user-reservations/user-reservations.service";
import {ConfirmDialogComponent} from './dialog/confirm-dialog.component';
import {UserProfileComponent} from './profile/user-profile.component';
import {ChangePasswordDialogComponent} from './dialog/change-password-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    LoginComponent,
    HotelComponent,
    HotelProfileComponent,
    RegisterComponent,
    HotelProfileComponent,
    HotelReservationComponent,
    HotelEditComponent,
    SystemAdministratorComponent,
    FriendsComponent,
    SystemAdministratorComponent,
    HotelRoomEditComponent,
    UserSearchComponent,
    UserReservationsComponent,
    ConfirmDialogComponent,
    UserProfileComponent,
    ChangePasswordDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA1BgogjhmzldHi2f-6sUqGkmYKFOwjOaA',
      language: 'en',
      libraries: ['geometry', 'places']
    })
  ],
  providers: [Globals, AuthService, AuthenticatedGuardService, LoginGuardService, RegisterService, HotelService, HotelProfileService
    , FriendsService, UserSearchService, UserReservationsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConfigInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent],
  entryComponents: [
    ConfirmDialogComponent,
    ChangePasswordDialogComponent
  ]
})
export class AppModule {
}
