import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { WhyMe } from './why-me/why-me';
import { MySkills } from './my-skills/my-skills';
import { MyProjects } from './my-projects/my-projects';
import { Refs } from './refs/refs';
import { Contact } from './contact/contact';

/**
 * Main Page Component
 * 
 * @component
 * @standalone
 * @selector app-main-page
 * 
 * @description
 * Container component for the main portfolio landing page.
 * Orchestrates all major content sections in the correct order:
 * 
 * Section flow:
 * 1. Hero - Introduction with profile image and call-to-action
 * 2. Why Me - Value proposition and key strengths
 * 3. My Skills - Technical skill set with icons and proficiency levels
 * 4. My Projects - Portfolio project showcase with previews
 * 5. Refs - Client testimonials and references
 * 6. Contact - Contact form with email integration
 * 
 * This component is loaded via the main route ('/') and provides
 * the complete user experience for visitors to the portfolio.
 * 
 * @example
 * // Routed automatically in app.routes.ts:
 * { path: '', component: MainPage }
 */
@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    Hero,
    WhyMe,
    MySkills,
    MyProjects,
    Refs,
    Contact
  ],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss'
})
export class MainPage {
  /**
   * Constructor for MainPage component
   */
  constructor() {}
}
