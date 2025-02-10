import { Component, OnInit, inject } from '@angular/core';
import { FlightService } from '../../services/flights.service';

import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-flights',
  standalone: true,
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css'],
  imports: [NgFor, NgIf]
})
export class FlightsComponent implements OnInit {
  private flightService = inject(FlightService);
  flights: any[] = [];

  ngOnInit(): void {
    this.loadFlights();
  }

  loadFlights(): void {
    this.flightService.getFlights().subscribe({
      next: (data) => {
        this.flights = data;
        console.log('✅ Flights loaded:', this.flights);
      },
      error: (err) => console.error('❌ Error fetching flights:', err)
    });
  }
}
