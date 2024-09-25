import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home-feed',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatDividerModule, MatListModule,CommonModule],
  templateUrl: './home-feed.component.html',
  styleUrl: './home-feed.component.scss'
})
export class HomeFeedComponent {
  isExpanded: boolean = false;

  // Sample paragraph
  paragraph: string = `This is a sample paragraph. You can write some content here and when the content exceeds 
  a certain length, you can click.`;

  toggleReadMore() {
    this.isExpanded = !this.isExpanded;
  }
}
