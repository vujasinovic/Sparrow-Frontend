import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {HotelComponent} from "./hotels/hotel.component";
import {HotelProfileComponent} from "./hotel-profile/hotel-profile.component";

const routes: Routes = [
  {path: '', component : HomeComponent},
  {path: 'hotels', component: HotelComponent},
  {path: 'hotels/:id', component: HotelProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
