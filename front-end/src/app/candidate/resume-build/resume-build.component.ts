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
import { JsonPipe } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-resume-build',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatCardModule, MatDividerModule, MatButtonModule, MatListModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatDatepickerModule, MatRadioModule, MatCheckboxModule, FormsModule, JsonPipe, ReactiveFormsModule],
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
}
