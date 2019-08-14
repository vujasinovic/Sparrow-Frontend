import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {LoginGuardService} from './login/login-guard';
import {RegisterComponent} from './register/register.component';
import {FriendsComponent} from './friends/friends.component';
import {FriendRequestComponent} from './friends/friend-request.component';
import {HotelComponent} from './hotels/hotel.component';
import {HotelProfileComponent} from './hotel-profile/hotel-profile.component';
import {HotelReservationComponent} from './hotel-reservation/hotel-reservation.component';
import {HotelEditComponent} from './hotel-edit/hotel-edit.component';
import {SystemAdministratorComponent} from './system-administrator/system-administrator.component';
import {HotelRoomEditComponent} from './hotel-room-edit/hotel-room-edit.component';
import {AuthenticatedGuardService} from './login/auth-guard';
import {UserReservationsComponent} from "./user-reservations/user-reservations.component";

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
  {path: 'requests', component: FriendRequestComponent, canActivate: [AuthenticatedGuardService]},
  {path: 'friends', component: FriendsComponent, canActivate: [AuthenticatedGuardService]},
  {path: 'reservations', component: UserReservationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
