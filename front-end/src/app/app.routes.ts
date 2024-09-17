import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './candidate/dashboard/dashboard.component';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {
        path: 'candidate',
        children: [
          {
            path: 'dashboard',
            component: DashboardComponent,
          },
          
        ],
      },
];
