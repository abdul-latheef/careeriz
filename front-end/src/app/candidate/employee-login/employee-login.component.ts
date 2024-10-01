import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-employee-login',
  standalone: true,
  imports: [MatSelectModule, MatInputModule, MatInputModule,MatFormFieldModule],
  templateUrl: './employee-login.component.html',
  styleUrl: './employee-login.component.scss'
})
export class EmployeeLoginComponent {

}
