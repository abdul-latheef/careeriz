import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';


@Component({
  selector: 'app-resume-selection',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './resume-selection.component.html',
  styleUrl: './resume-selection.component.scss'
})
export class ResumeSelectionComponent {
  constructor(private router: Router) {}

  navigateToRoute() {
    this.router.navigate(['candidate/resume-build-details']);
  }
}
