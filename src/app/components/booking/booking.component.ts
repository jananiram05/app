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
  private bookingService = inject(BookingService);

  flights: any[] = [];
  users: any[] = [];
  selectedFlight: string = '';
  selectedUser: string = '';
  bookingStatus: string = 'BOOKED';

  ngOnInit(): void {
    this.loadFlights();
    this.loadUsers();
  }

  loadUsers(): void {
    this.bookingService.getUsers().subscribe({
      next: (data) => {
        console.log('✅ Users loaded:', data);

        this.users = data;
      },
      error: (err) => console.error('Error fetching users:', err)
    });
  }

  loadFlights(): void {
    this.bookingService.getFlights().subscribe({
      next: (data) => {
        console.log('✅ flight loaded:', data);

        this.flights = data;
      },
      error: (err) => console.error('Error fetching flights:', err)
    });
  }
  bookFlight(): void {
    if (!this.selectedFlight || !this.selectedUser) {
      alert('Please select a flight and a user.');
      return;
    }
  
    const bookingData = {
      flight: { id: this.selectedFlight }, // ✅ Correct format
      user: { id: this.selectedUser },
      status: this.bookingStatus
    };
  
    console.log('📤 Sending corrected booking data:', JSON.stringify(bookingData, null, 2));
  
    this.bookingService.bookFlight(bookingData).subscribe({
      next: (response) => {
        alert('Booking successful!');
        console.log(response);
      },
      error: (error) => {
        alert('Booking failed.');
        console.error('❌ Booking error:', error);
      }
    });
  }
  
  
}
