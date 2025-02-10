import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,  // ✅ Required for standalone component
  imports: [CommonModule, ReactiveFormsModule], // ✅ Import ReactiveFormsModule
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;
  successMessage: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    });
  }

  registerUser() {
    if (this.registerForm.valid) {
      this.http.post('http://localhost:8081/users/register', this.registerForm.value, {
        headers: { 'Content-Type': 'application/json' }
      })
      .subscribe(response => {
        this.successMessage = 'User registered successfully!';
        this.registerForm.reset();
      }, error => {
        console.error('Registration failed', error);
      });
    }
  }
  
  
}
