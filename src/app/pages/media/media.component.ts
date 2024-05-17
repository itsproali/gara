import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NewsCardComponent } from '../../components/news-card/news-card.component';
import { INews } from '../../core/models/interfaces/INews';
import { allNews } from '../../core/constant/allNews';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [CommonModule, RouterLink, NewsCardComponent],
  templateUrl: './media.component.html',
  styleUrl: './media.component.css',
})
export class MediaComponent {
  allNews: INews[] = allNews.slice(0, 3);
}
