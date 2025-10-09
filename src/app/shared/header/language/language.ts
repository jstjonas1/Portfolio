import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'app-language',
  imports: [],
  templateUrl: './language.html',
  styleUrl: './language.scss'
})
export class Language implements OnInit {
  currentLanguage: 'de' | 'en' = 'en';

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    // Get saved language from localStorage or use default
    const savedLang = localStorage.getItem('language') as 'de' | 'en';
    this.currentLanguage = savedLang || 'en';
    this.translate.use(this.currentLanguage);
  }

  setLanguage(lang: 'de' | 'en') {
    this.currentLanguage = lang;
    this.translate.use(lang);
    localStorage.setItem('language', lang);
    console.log(`Language changed to: ${lang}`);
  }
}


