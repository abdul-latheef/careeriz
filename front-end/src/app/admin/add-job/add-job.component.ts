import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-job',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, CommonModule],
  templateUrl: './add-job.component.html',
  styleUrl: './add-job.component.scss'
})
export class AddJobComponent {
  inputLabels = ['Name', 'Email', 'Phone', 'Address', 'City'];
}
