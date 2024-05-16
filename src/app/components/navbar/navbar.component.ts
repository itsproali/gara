import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavLink } from '../../core/models/classes/NavLink';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  navLinks: NavLink[];

  constructor() {
    this.navLinks = [
      { label: 'Éditeurs', path: '/', children: [] },
      {
        label: 'Partenaires',
        children: [
          { label: 'Télécoms et Agrégateurs', path: '/' },
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
        path: '/',
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
