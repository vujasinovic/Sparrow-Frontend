import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {LoginGuardService} from './login/login-guard';
import {RegisterComponent} from './register/register.component';
import {HotelComponent} from "./hotels/hotel.component";
import {HotelProfileComponent} from "./hotel-profile/hotel-profile.component";
import {HotelReservationComponent} from "./hotel-reservation/hotel-reservation.component";
import {HotelEditComponent} from "./hotel-edit/hotel-edit.component";
import {SystemAdministratorComponent} from "./system-administrator/system-administrator.component";

const routes: Routes = [
  {path: '', component : HomeComponent},
  {path: 'login/:username', component : LoginComponent, canActivate: [LoginGuardService]},
  {path: 'login', component : LoginComponent, canActivate: [LoginGuardService]},
  {path: 'register', component : RegisterComponent, canActivate: [LoginGuardService]},
  {path: 'hotels', component: HotelComponent},
  {path: 'hotels/:id', component: HotelProfileComponent},
  {path: 'hotels/:id/reservation', component: HotelReservationComponent},
  {path: 'hotels/:id/edit', component: HotelEditComponent},
  {path: 'sa', component: SystemAdministratorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
