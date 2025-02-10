import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8081/flights';

  getFlights(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
