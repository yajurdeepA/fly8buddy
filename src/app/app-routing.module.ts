import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './_components/login/login.component';
import { SignUpComponent } from './_components/sign-up/sign-up.component';
import { HomeComponent } from './_components/home/home.component';
import { FlightsComponent } from './_components/flights/flights.component';
import { MyDetailsComponent } from './_components/my-details/my-details.component';
import { MyBookingsComponent } from './_components/my-bookings/my-bookings.component';
import { AvailableFlightsComponent } from './_components/available-flights/available-flights.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {path:'home',component:HomeComponent},
  {path:'flight', component:FlightsComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignUpComponent},
  {path:'my-details',component:MyDetailsComponent},
  {path:'my-bookings',component:MyBookingsComponent},
  {path:'all-routes',component:AvailableFlightsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
