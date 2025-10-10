import { Routes } from '@angular/router';
import { MainPage } from './main/main-page';
import { LegalNotice } from './legal-notice/legal-notice';

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
