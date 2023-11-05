import { Component, OnInit } from '@angular/core';
import { FlightDataService } from 'src/app/_services/flight-data.service';

@Component({
  selector: 'app-available-flights',
  templateUrl: './available-flights.component.html',
  styleUrls: ['./available-flights.component.css']
})
export class AvailableFlightsComponent implements OnInit{
  routes:any[];
  constructor(private fs:FlightDataService){}
  ngOnInit(): void {
    this.fs.getRoutes().subscribe({
      next: data => {
        console.log(data);
        this.routes = data;
      }
    });
  }
}
