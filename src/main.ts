import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // ✅ Import ReactiveFormsModule
import { BookingComponent } from './app/components/booking/booking.component';
import { UsersComponent } from './app/components/users/users.component';
import { FlightsComponent } from './app/components/flights/flights.component';
import { RegisterComponent } from './app/components/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'flights', component: FlightsComponent },
  { path: 'bookings', component: BookingComponent },
  { path: 'register', component: RegisterComponent } // ✅ Add Register Page
];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    importProvidersFrom(FormsModule, ReactiveFormsModule), // ✅ Include ReactiveFormsModule
    provideRouter(routes) 
  ]
}).catch(err => console.error(err));
