import { Routes } from '@angular/router';
import { MediaComponent } from './pages/media/media.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'media',
    component: MediaComponent,
  },
];
