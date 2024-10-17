import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-job-search-entry',
  standalone: true,
  imports: [MatCardModule, MatInputModule, MatFormFieldModule, MatIconModule, FormsModule, MatButtonModule],
  templateUrl: './job-search-entry.component.html',
  styleUrl: './job-search-entry.component.scss'
})
export class JobSearchEntryComponent {
  constructor(private router: Router) {}

  searchTerm: string = '';

  onSearch() {
    // Implement search logic here
    this.router.navigate(['candidate/job-search']);
  }
}
