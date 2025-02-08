import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // No need to manually provide in `main.ts`
})
export class BookingService {
  private http = inject(HttpClient); // Using Angular 17 inject API
  private apiUrl = 'http://localhost:8081/bookings'; // Booking API URL

  getFlights(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8081/flights'); // Flight API
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8081/users'); // User API
  }

  bookFlight(bookingData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, bookingData);
  }
}
