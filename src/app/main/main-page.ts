import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { WhyMe } from './why-me/why-me';
import { MySkills } from './my-skills/my-skills';
import { MyProjects } from './my-projects/my-projects';
import { Refs } from './refs/refs';
import { Contact } from './contact/contact';

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
  constructor() {}
}
