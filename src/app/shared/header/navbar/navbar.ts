import { Component } from '@angular/core';
import { Language } from '../language/language';


@Component({
  standalone: true,
  selector: 'app-navbar',
  imports: [Language],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  isMobileMenuOpen = false;

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }
}
