import { AfterViewInit, Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { SkillsComponent } from "./skills/skills.component";
import { ServiceComponent } from "./service/service.component";
import { ProjectsComponent } from "./projects/projects.component";
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { ContactComponent } from "./contact/contact.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, AboutMeComponent, SkillsComponent, ServiceComponent, ProjectsComponent, FooterComponent, NavbarComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
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
