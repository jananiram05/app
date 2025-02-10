import { Component, OnInit, inject } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { CommonModule } from '@angular/common'; // ✅ Import this


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule], // ✅ Add this

  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  private usersService = inject(UsersService);
  users: any[] = [];

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.usersService.getUsers().subscribe({
      next: (data) => {
        console.log('✅ Users fetched:', data);
        this.users = data; // Ensure you're assigning API response directly
      },
      error: (err) => console.error('❌ Error fetching users:', err)
    });
  }
}
