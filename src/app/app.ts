
import { Component, ViewEncapsulation, signal } from '@angular/core';

import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Cv } from './components/cv/cv';
import { Education } from './components/education/education';
import { Experience } from './components/experience/experience';
import { Footer } from './components/footer/footer';
import { Hero } from './components/hero/hero';
import { Languages } from './components/languages/languages';
import { Navbar } from './components/navbar/navbar';
import { Projects } from './components/projects/projects';
import { Skills } from './components/skills/skills';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Navbar,
    Hero,
    About,
    Skills,
    Education,
    Languages,
    Experience,
    Projects,
    Cv,
    Contact,
    Footer,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  encapsulation: ViewEncapsulation.None,
})
export class App {
  protected readonly title = signal('mariling-jimenez-portafolio');
}
