import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { HomeFeedComponent } from '../home-feed/home-feed.component';
import { ResumeBuildComponent } from '../resume-build/resume-build.component';
import { ResumeBuildDetailsComponent } from "../resume-build-details/resume-build-details.component";
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatTabsModule, HomeFeedComponent, ResumeBuildComponent, ResumeBuildDetailsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
