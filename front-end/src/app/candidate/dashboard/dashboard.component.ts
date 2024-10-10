import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { HomeFeedComponent } from '../home-feed/home-feed.component';
import { ResumeBuildComponent } from '../resume-build/resume-build.component';
import { ResumeBuildDetailsComponent } from "../resume-build-details/resume-build-details.component";
import { MatCardModule } from '@angular/material/card'
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatTabsModule, HomeFeedComponent, ResumeBuildComponent, ResumeBuildDetailsComponent, MatCardModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
