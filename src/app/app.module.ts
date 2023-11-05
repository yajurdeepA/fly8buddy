import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { FooterComponent } from './_components/footer/footer.component';
import { LoginComponent } from './_components/login/login.component';
import { SignUpComponent } from './_components/sign-up/sign-up.component';
import { HomeComponent } from './_components/home/home.component';
import { FlightsComponent } from './_components/flights/flights.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlightDetailComponent } from './_components/flight-detail/flight-detail.component';
import { NgxIndexedDBModule, DBConfig } from 'ngx-indexed-db';
import { MyDetailsComponent } from './_components/my-details/my-details.component';
import { MyBookingsComponent } from './_components/my-bookings/my-bookings.component';
import { StringValidatorDirective } from './_directives/string-validator.directive';
import { AvailableFlightsComponent } from './_components/available-flights/available-flights.component';



const dbConfig: DBConfig = {
  name: 'myDb',
  version: 1,
  objectStoresMeta: [
    {
      store: 'routes',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'route', keypath: 'route', options: { unique: false } },
        { name: 'price', keypath: 'price', options: { unique: false } }
        // ... other fields if necessary
      ]
    }
  ]
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    FlightsComponent,
    FlightDetailComponent,
    MyDetailsComponent,
    MyBookingsComponent,
    StringValidatorDirective,
    AvailableFlightsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxIndexedDBModule.forRoot(dbConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
