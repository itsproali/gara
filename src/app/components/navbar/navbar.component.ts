import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { INavLink } from '../../core/models/interfaces/INavLink';
import { menuLinks } from '../../core/constant/menuLinks';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  navLinks: INavLink[] = menuLinks;
  isOpen = false;

  toggleSidenav() {
    this.isOpen = !this.isOpen;
    console.log('toggleSidenav', this.isOpen);
  }
}
