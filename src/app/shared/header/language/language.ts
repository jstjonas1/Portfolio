import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-language',
  imports: [],
  templateUrl: './language.html',
  styleUrl: './language.scss'
})
export class Language {
  currentLanguage: 'de' | 'en' = 'en';

  setLanguage(lang: 'de' | 'en') {
    this.currentLanguage = lang;
    // Implement language change logic here
    console.log(`Language changed to: ${lang}`);
  }
}


