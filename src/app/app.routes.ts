import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
     { path: 'home', component: HomeComponent },
     { path: 'service', component: ServiceComponent },
     { path: 'skills', component: SkillsComponent},
     { path: 'projects', component: ProjectsComponent },
     { path: 'contact', component: ContactComponent },
     { path: '**', component: AppComponent },
];
