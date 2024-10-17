import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './candidate/dashboard/dashboard.component';
import { HomeFeedComponent } from './candidate/home-feed/home-feed.component';
import { ResumeBuildComponent } from './candidate/resume-build/resume-build.component';
import { ResumeBuildDetailsComponent } from './candidate/resume-build-details/resume-build-details.component';
import { EmployeeLoginComponent } from './candidate/employee-login/employee-login.component';
import { JobSearchComponent } from './candidate/job-search/job-search.component';
import { LoginTypeComponent } from './auth/login/login-type/login-type.component';
import { AddJobComponent } from './admin/add-job/add-job.component';
import { JobDescriptionComponent } from './candidate/job-description/job-description.component';


export const routes: Routes = [
  { path: '', component: LoginTypeComponent },
  { path: 'login', component: LoginComponent },  
  { path: 'add-job', component:AddJobComponent},
  {
    path: 'candidate',
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'home-feed',
        component: HomeFeedComponent
      },
      {
        path: 'resume-build',
        component: ResumeBuildComponent
      },
      {
        path: 'resume-build-details',
        component: ResumeBuildDetailsComponent
      },
      {
        path: 'employee-login',
        component: EmployeeLoginComponent
      },
      {
        path: 'job-search',
        component: JobSearchComponent
      },
      {
        path: 'job-desc',
        component: JobDescriptionComponent
      }
    ],
  },
];
