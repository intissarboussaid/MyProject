import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, AboutMeComponent, SkillsComponent, ProjectsComponent, FooterComponent, NavbarComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'potfolio';
   
  activeSection = 'header';

  ngAfterViewInit() {
    const sections = document.querySelectorAll('app-header, app-skills, app-projects, app-contact');
    const options = { threshold: 0.6 };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.activeSection = entry.target.tagName.toLowerCase().replace('app-', '');
        }
      });
    }, options);

    sections.forEach(section => observer.observe(section));
  }
}
