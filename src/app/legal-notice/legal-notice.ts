import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

/**
 * Legal Notice Component
 * 
 * Displays the legal notice page with imprint information and terms of service.
 * Uses translation module for multi-language support (DE/EN).
 * 
 * @component
 * @standalone
 * @selector app-legal-notice
 * 
 * @description
 * This component renders a full-page legal notice with:
 * - Page title and imprint section with contact details
 * - Terms and conditions including:
 *   - Acceptance of terms
 *   - Scope and ownership of the product
 *   - Proprietary rights
 *   - Use of the product
 *   - Disclaimer of warranties
 *   - Indemnity clause
 * 
 * Content is loaded via ngx-translate with HTML support for formatting.
 * Styling follows Figma design specifications with responsive breakpoints.
 * 
 * @example
 * <app-legal-notice></app-legal-notice>
 * 
 * @dependencies
 * - CommonModule: Angular common directives
 * - TranslateModule: Internationalization support
 * - RouterModule: Navigation support
 */
@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.scss'
})
export class LegalNotice implements OnInit {
  /**
   * Constructor for LegalNotice component
   */
  constructor() {}

  /**
   * Lifecycle hook that is called after component initialization
   * Scrolls the page to the top when the component is loaded
   */
  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
