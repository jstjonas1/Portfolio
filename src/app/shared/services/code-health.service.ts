import { Injectable } from '@angular/core';

/**
 * Code Health Monitoring Service
 * 
 * @service
 * @providedIn root
 * 
 * @description
 * Provides comprehensive health monitoring for the portfolio application.
 * 
 * Features:
 * - Component load status tracking
 * - Responsive design breakpoint validation
 * - Critical function testing
 * - Complete application health reporting
 * 
 * This service helps identify issues during development and ensures
 * all components are properly initialized and functional.
 * 
 * @example
 * // In component:
 * constructor(private healthService: CodeHealthService) {}
 * 
 * ngOnInit() {
 *   this.healthService.registerComponent('MyComponent');
 *   this.healthService.runCompleteHealthCheck();
 * }
 */
@Injectable({
  providedIn: 'root'
})
export class CodeHealthService {
  /**
   * Tracks health status of all registered components
   * @private
   */
  private healthChecks: { [key: string]: boolean } = {};
  
  /**
   * List of components required for the application to be healthy
   * @private
   * @readonly
   */
  private readonly requiredComponents = [
    'Header',
    'Footer', 
    'Hero',
    'WhyMe',
    'MySkills',
    'MyProjects',
    'Refs',
    'Contact'
  ];

  constructor() {
    this.initializeHealthChecks();
  }

  /**
   * Initialize all components as unhealthy (not yet loaded)
   * @private
   * @returns {void}
   */
  private initializeHealthChecks(): void {
    this.requiredComponents.forEach(component => {
      this.healthChecks[component] = false;
    });
  }

  /**
   * Register a component as successfully loaded and healthy
   * @public
   * @param {string} componentName - Name of the component to register
   * @returns {void}
   */
  registerComponent(componentName: string): void {
    if (this.requiredComponents.includes(componentName)) {
      this.healthChecks[componentName] = true;
    }
  }

  /**
   * Check if all required components are healthy
   * @public
   * @returns {boolean} True if all components are healthy
   */
  isAppHealthy(): boolean {
    const allHealthy = Object.values(this.healthChecks).every(healthy => healthy);
    return allHealthy;
  }

  /**
   * Get detailed health status report for all components
   * @public
   * @returns {Array<{component: string, status: boolean}>} Array of component health statuses
   */
  getHealthReport(): { component: string, status: boolean }[] {
    return this.requiredComponents.map(component => ({
      component,
      status: this.healthChecks[component]
    }));
  }

  /**
   * Check if all responsive design breakpoints are functioning
   * @public
   * @returns {Array<{breakpoint: string, width: number, passed: boolean}>} Breakpoint test results
   */
  checkResponsiveDesign(): { breakpoint: string, width: number, passed: boolean }[] {
    const breakpoints = [
      { name: 'Mobile', width: 390 },
      { name: 'Tablet', width: 768 },
      { name: 'Desktop', width: 1024 },  
      { name: 'Large Desktop', width: 1440 }
    ];

    return breakpoints.map(bp => ({
      breakpoint: bp.name,
      width: bp.width,
      passed: this.testBreakpoint(bp.width)
    }));
  }

  /**
   * Test if a specific breakpoint width is supported
   * @private
   * @param {number} width - Breakpoint width in pixels
   * @returns {boolean} True if breakpoint is supported
   */
  private testBreakpoint(width: number): boolean {
    const mediaQuery = window.matchMedia(`(min-width: ${width}px)`);
    return mediaQuery.matches || window.innerWidth >= width;
  }

  /**
   * Test all critical application functions
   * @public
   * @returns {Array<{functionName: string, passed: boolean, error?: string}>} Function test results
   */
  testCriticalFunctions(): { functionName: string, passed: boolean, error?: string }[] {
    const tests = [];

    tests.push(this.testScrollFunction());
    tests.push(this.testNavigation());
    tests.push(this.testResponsiveLayout());

    return tests;
  }

  /**
   * Test if scroll functions are available in the browser
   * @private
   * @returns {{functionName: string, passed: boolean, error?: string}} Test result
   */
  private testScrollFunction(): { functionName: string, passed: boolean, error?: string } {
    try {
      const hasScrollTo = typeof window.scrollTo === 'function';
      const hasScrollIntoView = typeof Element.prototype.scrollIntoView === 'function';
      
      return {
        functionName: 'Scroll Functions',
        passed: hasScrollTo && hasScrollIntoView
      };
    } catch (error) {
      return {
        functionName: 'Scroll Functions',
        passed: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  /**
   * Test if navigation elements exist in the DOM
   * @private
   * @returns {{functionName: string, passed: boolean, error?: string}} Test result
   */
  private testNavigation(): { functionName: string, passed: boolean, error?: string } {
    try {
      const navElements = document.querySelectorAll('nav, .navbar, [role="navigation"]');
      
      return {
        functionName: 'Navigation',
        passed: navElements.length > 0
      };
    } catch (error) {
      return {
        functionName: 'Navigation',
        passed: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  /**
   * Test if responsive layout features are supported
   * @private
   * @returns {{functionName: string, passed: boolean, error?: string}} Test result
   */
  private testResponsiveLayout(): { functionName: string, passed: boolean, error?: string } {
    try {
      const supportsCustomProperties = CSS.supports('color', 'var(--color-red)');
      
      const testElement = document.createElement('div');
      testElement.className = 'mobile-layout desktop-layout';
      
      return {
        functionName: 'Responsive Layout',
        passed: supportsCustomProperties
      };
    } catch (error) {
      return {
        functionName: 'Responsive Layout', 
        passed: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  /**
   * Execute complete health check
   * Tests component health, responsive design, and critical functions
   * Results are available via getHealthReport(), checkResponsiveDesign(), and testCriticalFunctions()
   * @public
   * @returns {void}
   */
  runCompleteHealthCheck(): void {
    const healthReport = this.getHealthReport();
    const overallHealth = this.isAppHealthy();
    const responsiveTests = this.checkResponsiveDesign();
    const functionTests = this.testCriticalFunctions();
  }
}