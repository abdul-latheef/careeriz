import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { HomeFeedComponent } from '../home-feed/home-feed.component';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatTabsModule, HomeFeedComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
