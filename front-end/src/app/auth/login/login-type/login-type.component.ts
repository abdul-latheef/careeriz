import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-type',
  standalone: true,
  imports: [MatSelectModule, MatInputModule, MatFormFieldModule, FormsModule, ReactiveFormsModule, MatRadioModule],
  templateUrl: './login-type.component.html',
  styleUrl: './login-type.component.scss'
})
export class LoginTypeComponent {
  selectedOption: string = '';

  constructor(private router: Router) { }

  redirectToPage() {
    this.router.navigate(['login']);
  }
}
