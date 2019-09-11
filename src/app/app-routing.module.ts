import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {LoginGuardService} from './login/login-guard';
import {RegisterComponent} from './register/register.component';
import {HotelComponent} from './hotels/hotel.component';
import {HotelProfileComponent} from './hotel-profile/hotel-profile.component';
import {HotelReservationComponent} from './hotel-reservation/hotel-reservation.component';
import {HotelEditComponent} from './hotel-edit/hotel-edit.component';
import {SystemAdministratorComponent} from './system-administrator/system-administrator.component';
import {HotelRoomEditComponent} from './hotel-room-edit/hotel-room-edit.component';
import {AuthenticatedGuardService} from './login/auth-guard';
import {UserReservationsComponent} from './user-reservations/user-reservations.component';
import {UserProfileComponent} from './profile/user-profile.component';
import {UserSearchComponent} from './user/user-search.component';
import {RentacarsComponent} from "./rentacars/rentacars.component";
import {RentacarProfileComponent} from "./rentacar-profile/rentacar-profile.component";
import {CarEditComponent} from "./car-edit/car-edit.component";
import {RentacarEditComponent} from "./rentacar-edit/rentacar-edit.component";
import {CarReservationComponent} from "./car-reservation/car-reservation.component";
import {HotelStatisticComponent} from './hotel-statistic/hotel-statistic.component';
import {AirlineProfileComponent} from './airline/airline-profile.component';
import {FlightEditorComponent} from './airline/flight-editor.component';
import {FlightsOverviewComponent} from './airline/flights-overview.component';
import {SearchFlightsComponent} from './flights/search-flights.component';
import {BuyTicketComponent} from './flights/buy-ticket.component';
import {TicketsComponent} from './flights/tickets.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login/:username', component: LoginComponent, canActivate: [LoginGuardService]},
  {path: 'login', component: LoginComponent, canActivate: [LoginGuardService]},
  {path: 'register', component: RegisterComponent, canActivate: [LoginGuardService]},
  {path: 'hotels', component: HotelComponent},
  {path: 'hotels/:id', component: HotelProfileComponent},
  {path: 'hotels/:id/pricelist', component: HotelProfileComponent},
  {path: 'hotels/:id/reservation', component: HotelReservationComponent},
  {path: 'hotels/:id/edit', component: HotelEditComponent},
  {path: 'hotels/:hotelId/room/:roomId/edit', component: HotelRoomEditComponent},
  {path: 'sa', component: SystemAdministratorComponent},
  {path: 'friends/search', component: UserSearchComponent, canActivate: [AuthenticatedGuardService]},
  {path: 'reservations', component: UserReservationsComponent},
  {path: 'user/profile', component: UserProfileComponent, canActivate: [AuthenticatedGuardService]},
  {path: 'rentacars', component:RentacarsComponent},
  {path: 'rentacars/:id' , component:RentacarProfileComponent},
  {path: 'rentacars/:rentacarId/car/:carId/edit' , component: CarEditComponent},
  {path: 'rentacars/:id/edit' , component:RentacarEditComponent},
  {path: 'rentacars/:id/reservation' , component:CarReservationComponent},
  {path: 'user/profile', component: UserProfileComponent, canActivate: [AuthenticatedGuardService]},
  {path: 'edit-airline/:id', component: AirlineProfileComponent, canActivate: [AuthenticatedGuardService]},
  {path: 'edit-airline', component: AirlineProfileComponent, canActivate: [AuthenticatedGuardService]},
  {path: 'edit-flight', component: FlightEditorComponent, canActivate: [AuthenticatedGuardService]},
  {path: 'edit-flight/:fid', component: FlightEditorComponent, canActivate: [AuthenticatedGuardService]},
  {path: 'airline-flights', component: FlightsOverviewComponent, canActivate: [AuthenticatedGuardService]},
  {path: 'user/profile', component: UserProfileComponent, canActivate: [AuthenticatedGuardService]},
  {path: 'hotels/:id/statistic', component: HotelStatisticComponent},
  {path: 'search-flights', component: SearchFlightsComponent},
  {path: 'buy-ticket/:id', component: BuyTicketComponent, canActivate: [AuthenticatedGuardService]},
  {path: 'tickets', component: TicketsComponent, canActivate: [AuthenticatedGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
