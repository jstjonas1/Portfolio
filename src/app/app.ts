import { Component, signal, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';
import { CodeHealthService } from './shared/services/code-health.service';

/**
 * Root Application Component
 * 
 * @component
 * @standalone
 * @selector app-root
 * 
 * @description
 * Main application component that serves as the entry point for the portfolio application.
 * Manages the application layout with persistent header and footer, while content is loaded
 * via Angular Router.
 * 
 * Layout structure:
 * - Header (navigation, logo, language switcher)
 * - Router Outlet (dynamic page content)
 * - Footer (social links, legal notice links)
 * 
 * Responsibilities:
 * - Initialize code health monitoring service
 * - Register all application components for health checks
 * - Provide consistent layout across all routes
 * 
 * @implements {OnInit}
 * 
 * @example
 * // Used as root component in main.ts:
 * bootstrapApplication(App, appConfig);
 */
@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  /**
   * Application title signal
   * @protected
   * @readonly
   * @type {Signal<string>}
   */
  protected readonly title = signal('portfolio');

  /**
   * Code health monitoring service instance
   * @private
   * @type {CodeHealthService}
   */
  private codeHealthService = inject(CodeHealthService);

  /**
   * Component initialization lifecycle hook
   * Registers all components with the health service and triggers initial health check
   * 
   * @returns {void}
   */
  ngOnInit(): void {
    this.codeHealthService.registerComponent('Header');
    this.codeHealthService.registerComponent('Footer');
    this.codeHealthService.registerComponent('Hero');
    this.codeHealthService.registerComponent('WhyMe');
    this.codeHealthService.registerComponent('MySkills');
    this.codeHealthService.registerComponent('MyProjects');
    this.codeHealthService.registerComponent('Refs');
    this.codeHealthService.registerComponent('Contact');

    setTimeout(() => {
      this.codeHealthService.runCompleteHealthCheck();
    }, 1000);
  }

  /**
   * Manually trigger a complete health check of all registered components
   * Useful for debugging and monitoring component status
   * 
   * @public
   * @returns {void}
   */
  runHealthCheck(): void {
    this.codeHealthService.runCompleteHealthCheck();
  }
}
