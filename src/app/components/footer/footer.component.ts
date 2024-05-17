import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { INavLink } from '../../core/models/interfaces/INavLink';
import { menuLinks } from '../../core/constant/menuLinks';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  menuLinks: INavLink[] = menuLinks;
}
