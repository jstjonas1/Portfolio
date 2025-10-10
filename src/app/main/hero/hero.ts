import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

/**
 * Hero Section Component
 * 
 * @component
 * @standalone
 * @selector app-hero
 * 
 * @description
 * Landing section of the portfolio featuring:
 * - Developer name and title
 * - Profile images (desktop/mobile variants)
 * - Primary call-to-action button
 * - Smooth scroll navigation to next section
 * 
 * This is the first impression visitors get when landing on the portfolio.
 * Uses ngx-translate for multi-language support.
 * 
 * @example
 * <app-hero></app-hero>
 */
@Component({
  selector: 'app-hero',
  imports: [TranslateModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {

  /**
   * Smoothly scrolls to the next section (Why Me)
   * Attempts to find section by class or id and scrolls into view
   * 
   * @public
   * @returns {void}
   */
  scrollToNext(): void {
    const nextSection = document.querySelector('.why-me-section') || document.querySelector('[id="why-me"]');
    if (nextSection) {
      nextSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}
