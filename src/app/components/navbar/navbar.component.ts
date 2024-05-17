import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { INavLink } from '../../core/models/interfaces/INavLink';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  navLinks: INavLink[];

  constructor() {
    this.navLinks = [
      { label: 'Éditeurs', path: '/editor', children: [] },
      {
        label: 'Partenaires',
        children: [
          { label: 'Télécoms et Agrégateurs', path: '/par' },
          {
            label: 'Institutionnels',
            path: '/',
          },
          {
            label: 'Privés et Universités',
            path: '/',
          },
          {
            label: 'Influenceurs et Ambassadeurs',
            path: '/',
          },
        ],
      },
      {
        label: 'Investisseurs',
        path: '/',
        children: [],
      },
      {
        label: 'Nos Valeurs et Équipe',
        path: '/',
        children: [],
      },
      {
        label: 'Média',
        path: '/media',
        children: [],
      },
      {
        label: 'Public Data',
        path: '/',
        children: [],
      },
    ];
  }
}
