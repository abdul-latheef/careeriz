import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { HomeFeedComponent } from '../home-feed/home-feed.component';
import { ResumeBuildComponent } from '../resume-build/resume-build.component';
import { ResumeBuildDetailsComponent } from "../resume-build-details/resume-build-details.component";
import { MatCardModule } from '@angular/material/card';
import { ResumeSelectionComponent } from "../resume-selection/resume-selection.component";
import { JobSearchComponent } from "../job-search/job-search.component";
import { JobSearchEntryComponent } from "../job-search-entry/job-search-entry.component";
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatTabsModule, HomeFeedComponent, ResumeBuildComponent, ResumeBuildDetailsComponent, MatCardModule, ResumeSelectionComponent, JobSearchComponent, JobSearchEntryComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  

}
