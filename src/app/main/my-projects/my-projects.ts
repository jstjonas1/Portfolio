import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import projectsData from './projects-data.json';

/**
 * Project Interface
 * Defines the structure of a portfolio project
 */
interface Project {
  id: string;
  image: string;
  translationKey: string;
  githubUrl: string;
  liveUrl: string;
  order: number;
}

/**
 * My Projects Component
 * 
 * @component
 * @standalone
 * @selector app-my-projects
 * 
 * @description
 * Displays portfolio projects in a responsive grid layout.
 * Projects are loaded from a JSON file and rendered dynamically.
 * Supports multi-language content via ngx-translate.
 * 
 * @example
 * <app-my-projects></app-my-projects>
 */
@Component({
  selector: 'app-my-projects',
  imports: [CommonModule, TranslateModule],
  templateUrl: './my-projects.html',
  styleUrl: './my-projects.scss'
})
export class MyProjects implements OnInit {
  /**
   * Array of portfolio projects loaded from JSON
   * @public
   */
  projects: Project[] = [];

  /**
   * Component initialization
   * Loads and sorts projects from JSON data
   * 
   * @returns {void}
   */
  ngOnInit(): void {
    this.projects = (projectsData as Project[]).sort((a, b) => a.order - b.order);
  }
}
