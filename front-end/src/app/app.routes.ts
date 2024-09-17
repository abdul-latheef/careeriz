import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './candidate/dashboard/dashboard.component';
import { HomeFeedComponent } from './candidate/home-feed/home-feed.component';
import { ResumeBuildComponent } from './candidate/resume-build/resume-build.component';
export const routes: Routes = [
    {path: '', component: LoginComponent},
    {
        path: 'candidate',
        children: [
          {
            path: 'dashboard',
            component: DashboardComponent,
          },
          {
            path:'home-feed',
            component: HomeFeedComponent
          },
          {
            path:'resume-build',
            component: ResumeBuildComponent
          }
        ],
      },
];
