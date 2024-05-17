import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NewsletterComponent } from '../../components/newsletter/newsletter.component';
import { NewsCardComponent } from '../../components/news-card/news-card.component';
import { INews } from '../../core/models/interfaces/INews';
import { allNews } from '../../core/constant/allNews';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    NewsletterComponent,
    NewsCardComponent,
    SlickCarouselModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  allNews: INews[] = allNews;
  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    dots: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

  afterChange(e: any) {
    console.log('afterChange');
  }

  beforeChange(e: any) {
    console.log('beforeChange');
  }
}
