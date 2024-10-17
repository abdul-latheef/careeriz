import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-job-description',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './job-description.component.html',
  styleUrl: './job-description.component.scss'
})
export class JobDescriptionComponent {

}
