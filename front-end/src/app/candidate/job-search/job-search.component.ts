import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-job-search',
  standalone: true,
  imports: [MatCardModule, MatExpansionModule, MatCheckboxModule, MatProgressBarModule],
  templateUrl: './job-search.component.html',
  styleUrl: './job-search.component.scss'
})
export class JobSearchComponent {
  experience: number = 10;
}
