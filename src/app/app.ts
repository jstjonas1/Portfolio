import { Component, signal, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';
import { Hero } from './main/hero/hero';
import { WhyMe } from './main/why-me/why-me';
import { MySkills } from './main/my-skills/my-skills';
import { MyProjects } from './main/my-projects/my-projects';
import { Refs } from './main/refs/refs';
import { Contact } from './main/contact/contact';
import { CodeHealthService } from './shared/services/code-health.service';



@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Hero, WhyMe, MySkills, MyProjects, Refs, Contact],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('portfolio');
  private codeHealthService = inject(CodeHealthService);

  ngOnInit(): void {
    // Register all components as loaded
    this.codeHealthService.registerComponent('Header');
    this.codeHealthService.registerComponent('Footer');
    this.codeHealthService.registerComponent('Hero');
    this.codeHealthService.registerComponent('WhyMe');
    this.codeHealthService.registerComponent('MySkills');
    this.codeHealthService.registerComponent('MyProjects');
    this.codeHealthService.registerComponent('Refs');
    this.codeHealthService.registerComponent('Contact');

    // Run complete health check after components load
    setTimeout(() => {
      this.codeHealthService.runCompleteHealthCheck();
    }, 1000);
  }

  // Manual health check trigger
  runHealthCheck(): void {
    this.codeHealthService.runCompleteHealthCheck();
  }
}
