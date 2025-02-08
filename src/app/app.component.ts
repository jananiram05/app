import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookingComponent } from "./components/booking/booking.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BookingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
}
