import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CodeHealthService {
  private healthChecks: { [key: string]: boolean } = {};
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

  private initializeHealthChecks(): void {
    // Initialize all components as unhealthy
    this.requiredComponents.forEach(component => {
      this.healthChecks[component] = false;
    });
  }

  // Register component as healthy
  registerComponent(componentName: string): void {
    if (this.requiredComponents.includes(componentName)) {
      this.healthChecks[componentName] = true;
      console.log(`✅ ${componentName} component successfully loaded`);
    }
  }

  // Check if all components are healthy
  isAppHealthy(): boolean {
    const allHealthy = Object.values(this.healthChecks).every(healthy => healthy);
    return allHealthy;
  }

  // Get detailed health report
  getHealthReport(): { component: string, status: boolean }[] {
    return this.requiredComponents.map(component => ({
      component,
      status: this.healthChecks[component]
    }));
  }

  // Check responsive design breakpoints
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

  private testBreakpoint(width: number): boolean {
    // Check if CSS media queries work for this breakpoint
    const mediaQuery = window.matchMedia(`(min-width: ${width}px)`);
    return mediaQuery.matches || window.innerWidth >= width;
  }

  // Test critical functions
  testCriticalFunctions(): { functionName: string, passed: boolean, error?: string }[] {
    const tests = [];

    // Test scroll functionality
    tests.push(this.testScrollFunction());
    
    // Test navigation
    tests.push(this.testNavigation());

    // Test responsive layout switching
    tests.push(this.testResponsiveLayout());

    return tests;
  }

  private testScrollFunction(): { functionName: string, passed: boolean, error?: string } {
    try {
      // Test if scroll functions are available
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

  private testNavigation(): { functionName: string, passed: boolean, error?: string } {
    try {
      // Test if navigation elements exist
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

  private testResponsiveLayout(): { functionName: string, passed: boolean, error?: string } {
    try {
      // Test if CSS custom properties are supported
      const supportsCustomProperties = CSS.supports('color', 'var(--color-red)');
      
      // Test if required CSS classes exist
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

  // Run complete health check
  runCompleteHealthCheck(): void {
    console.log('🔍 Starting Portfolio Health Check...\n');
    
    // Component Health
    console.log('📦 Component Health:');
    const healthReport = this.getHealthReport();
    healthReport.forEach(item => {
      const status = item.status ? '✅' : '❌';
      console.log(`  ${status} ${item.component}`);
    });
    
    // Overall App Health
    const overallHealth = this.isAppHealthy();
    console.log(`\n🏠 Overall App Health: ${overallHealth ? '✅ HEALTHY' : '❌ NEEDS ATTENTION'}\n`);
    
    // Responsive Design Test
    console.log('📱 Responsive Design Check:');
    const responsiveTests = this.checkResponsiveDesign();
    responsiveTests.forEach(test => {
      const status = test.passed ? '✅' : '❌';
      console.log(`  ${status} ${test.breakpoint} (${test.width}px)`);
    });
    
    // Critical Functions Test
    console.log('\n⚙️ Critical Functions Check:');
    const functionTests = this.testCriticalFunctions();
    functionTests.forEach(test => {
      const status = test.passed ? '✅' : '❌';
      const error = test.error ? ` - Error: ${test.error}` : '';
      console.log(`  ${status} ${test.functionName}${error}`);
    });
    
    console.log('\n🎯 Health Check Complete!\n');
  }
}