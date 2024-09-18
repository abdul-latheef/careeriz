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
import {MatIconModule} from '@angular/material/icon';
import { JsonPipe } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume-build',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatCardModule, MatDividerModule, MatButtonModule, MatListModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatDatepickerModule, MatRadioModule, MatCheckboxModule, FormsModule, JsonPipe, ReactiveFormsModule,MatIconModule,CommonModule],
  templateUrl: './resume-build.component.html',
  styleUrl: './resume-build.component.scss'
})
export class ResumeBuildComponent {
  private readonly _formBuilder = inject(FormBuilder);

  readonly toppings = this._formBuilder.group({
    pepperoni: false,
    extracheese: false,
    mushroom: false,
  });

  options: string[] = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
  selectedValues: string[] = [];

  // For Image Upload
  fileName: string = '';
  previewUrl: any = null;

  onFileSelected(event: any): void {
    const file = event.target.files[0];

    if (file) {
      this.fileName = file.name;

      // Preview the image
      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onClear(): void {
    this.fileName = '';
    this.previewUrl = null;
  }

  // Multiple Select Options
   // Array to hold selected options
   selectedItems: string[] = [];
  
   // List of options in the dropdown
   dropdownItems: string[] = ['English', 'Arabic', 'Spanish', 'Other'];


   // Array to hold selected options
   selectedOpportunities: string[] = [];
  
   // List of options in the dropdown
   dropdownOpportunities: string[] = ['Single parent', 'Working mother', 'Served in military', 'Retired (60+)', 'LGBTQ'];


  //  This is for Second Form

    // Declare the profileSummary property
  profileSummary: string = '';

  constructor() { }

  // Industry Domains
  industryDomains: string[] = ['Technology', 'Finance', 'Healthcare', 'Education', 'Manufacturing'];
   
}
