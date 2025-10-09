import { Component } from '@angular/core';
import { Logo } from './logo/logo';
import { Navbar } from './navbar/navbar';
import { Language } from './language/language';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [Logo, Navbar, Language],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

}
