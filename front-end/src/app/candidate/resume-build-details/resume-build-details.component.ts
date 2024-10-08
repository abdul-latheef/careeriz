import { Component, inject, HostListener } from '@angular/core';
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
import { FormBuilder, ReactiveFormsModule,FormGroup, Validators } from '@angular/forms';
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
  sidebarTop: string = '69px'; // Default top value for the sidebar

  // Listen to window scroll events
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollPosition > 69) {
      this.sidebarTop = '0px'; // If scrolled past the header, set top to 0
    } else {
      this.sidebarTop = '69px'; // Otherwise, set it to 69px
    }
  }

  // Array to hold selected options
  selectedItems: string[] = [];

  // List of options in the dropdown
  dropdownItems: string[] = ['English', 'Arabic', 'Spanish', 'Other'];

  multiStepForm: FormGroup;
  currentStep: number = 1;

  constructor(private fb: FormBuilder) {
    this.multiStepForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]      
    });
  }

  nextStep() {
    if (this.currentStep < 3) {
      this.currentStep++;
    }
  }

  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  onSubmit() {
    if (this.multiStepForm.valid) {
      console.log('Form submitted:', this.multiStepForm.value);
    }
  }

  // Declare the profileSummary property
  profileSummary: string = '';

  // Industry Domains
  industryDomains: string[] = ['Technology', 'Finance', 'Healthcare', 'Education', 'Manufacturing'];

  placementStatus: string = '';  // Variable to store selected placement status
}
