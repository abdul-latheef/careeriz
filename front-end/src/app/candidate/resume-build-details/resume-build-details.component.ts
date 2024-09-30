import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { JsonPipe } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume-build-details',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatCardModule, MatDividerModule, MatButtonModule, MatListModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatDatepickerModule, MatRadioModule, MatCheckboxModule, FormsModule, JsonPipe, ReactiveFormsModule, MatIconModule, CommonModule],
  templateUrl: './resume-build-details.component.html',
  styleUrl: './resume-build-details.component.scss'
})
export class ResumeBuildDetailsComponent {
  // Array to hold selected options
  selectedItems: string[] = [];

  // List of options in the dropdown
  dropdownItems: string[] = ['English', 'Arabic', 'Spanish', 'Other'];
}
