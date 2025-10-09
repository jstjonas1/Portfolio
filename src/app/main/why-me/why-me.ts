import { Component } from '@angular/core';

@Component({
  selector: 'app-why-me',
  imports: [],
  templateUrl: './why-me.html',
  styleUrl: './why-me.scss'
})
export class WhyMe {
  scrollToNext(): void {
    const nextSection = document.querySelector('.my-skills-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
