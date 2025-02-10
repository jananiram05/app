import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private baseUrl = 'http://localhost:8081';

  constructor(private http: HttpClient) {}

  getFlights(): Observable<any> {
    return this.http.get(`${this.baseUrl}/flights`);
  }

  getUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/users`);
  }

  bookFlight(bookingData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/bookings`, bookingData);
  }
}
