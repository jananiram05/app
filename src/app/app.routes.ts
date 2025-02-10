import { Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { FlightsComponent } from './components/flights/flights.component';
import { BookingComponent } from './components/booking/booking.component';

export const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' }, // Redirect to Users instead of Bookings
  { path: 'users', component: UsersComponent },
  { path: 'flights', component: FlightsComponent },
  { path: 'bookings', component: BookingComponent }
];
