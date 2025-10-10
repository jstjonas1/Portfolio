import { Routes } from '@angular/router';
import { MainPage } from './main/main-page';
import { LegalNotice } from './legal-notice/legal-notice';

/**
 * Application Routing Configuration
 * 
 * @description
 * Defines all routes for the portfolio application.
 * 
 * Route structure:
 * - '' (root): Main portfolio page with all sections
 * - 'legal-notice': Legal notice and imprint page
 * - 'impressum': German alias redirecting to legal-notice
 * - '**' (wildcard): Catch-all route redirecting to home
 * 
 * All routes are configured with browser titles for SEO and user experience.
 * The application uses Angular Router with a single router-outlet in App component.
 * 
 * @example
 * // In main.ts:
 * provideRouter(routes)
 * 
 * // In templates:
 * <a routerLink="/">Home</a>
 * <a routerLink="/legal-notice">Legal Notice</a>
 */
export const routes: Routes = [
  {
    path: '',
    component: MainPage,
    title: 'Jonas Stegner - Fullstack Developer'
  },
  {
    path: 'legal-notice',
    component: LegalNotice,
    title: 'Legal Notice - Jonas Stegner'
  },
  {
    path: 'impressum',
    redirectTo: 'legal-notice'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
