import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-my-skills',
  imports: [TranslateModule],
  templateUrl: './my-skills.html',
  styleUrl: './my-skills.scss'
})
export class MySkills {
  scrollToNext(): void {
    const nextSection = document.querySelector('.my-projects-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
