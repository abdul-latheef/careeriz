import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { HomeFeedComponent } from '../home-feed/home-feed.component';
import { ResumeBuildComponent } from '../resume-build/resume-build.component';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatTabsModule, HomeFeedComponent, ResumeBuildComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
