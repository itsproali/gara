import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { INews } from '../../core/models/interfaces/INews';

@Component({
  selector: 'app-news-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.css',
})
export class NewsCardComponent {
  @Input() news!: INews;
}
