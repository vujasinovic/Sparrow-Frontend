import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {LoginGuardService} from './login/login-guard';

const routes: Routes = [
  {path: '', component : HomeComponent},
  {path: 'login', component : LoginComponent, canActivate: [LoginGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
