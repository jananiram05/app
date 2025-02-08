import { Component, OnInit, inject } from '@angular/core';
import { BookingService } from '../../services/booking.service';

import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-booking',
  standalone: true,
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
  imports: [NgFor, NgIf, FormsModule]
})
export class BookingComponent implements OnInit {
  private bookingService = inject(BookingService); // Use BookingService

  flights: any[] = [];
  users: any[] = [];
  selectedFlight: string = '';
  selectedUser: string = '';
  bookingStatus: string = 'BOOKED'; // Set default to "BOOKED"

  ngOnInit(): void {
    this.loadFlights();
    this.loadUsers();
  }

  loadUsers(): void {
    console.log('Fetching Users...');
    this.bookingService.getUsers().subscribe({
      next: (data) => {
        console.log('Users received:', data);
        this.users = data;
      },
      error: (err) => {
        console.error('Error fetching users:', err);
      }
    });
  }

  loadFlights(): void {
    console.log('Fetching Flights...');
    this.bookingService.getFlights().subscribe({
      next: (data) => {
        console.log('Flights received:', data);
        this.flights = data;
      },
      error: (err) => {
        console.error('Error fetching flights:', err);
      }
    });
  }

  bookFlight(): void {
    if (!this.selectedFlight || !this.selectedUser) {
      alert('Please select a flight and a user.');
      return;
    }

    // ✅ FIXED PAYLOAD STRUCTURE
    const bookingData = {
      user: { id: this.selectedUser }, // Corrected to match backend model
      flight: { id: this.selectedFlight }, // Corrected to match backend model
      status: this.bookingStatus // Should be "BOOKED" or "CANCELLED"
    };

    console.log('Sending booking request:', bookingData);

    this.bookingService.bookFlight(bookingData).subscribe({
      next: (response) => {
        alert('Booking successful!');
        console.log('Booking Response:', response);
      },
      error: (error) => {
        alert('Booking failed. Check console for details.');
        console.error('Booking Error:', error);
      }
    });
  }
}
