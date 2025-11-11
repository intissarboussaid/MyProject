import { Component, Input, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  darkMode = false;
  OpenDrop=false;
constructor(private renderer: Renderer2) {}
@Input() activeSection = '';
  ngOnInit(): void {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.darkMode=true;
      this.renderer.addClass(document.body, 'dark-mode');
    }
  }

  darkTheme(): void {
    const body = document.body;
    if (body.classList.contains('dark-mode')) {
      this.renderer.removeClass(body, 'dark-mode');
      localStorage.setItem('theme', 'light');
      this.darkMode=false;
    } else {
      this.renderer.addClass(body, 'dark-mode');
      localStorage.setItem('theme', 'dark');
      this.darkMode=true;
    }
  }
  OpenDropDown(){
     this.OpenDrop=!this.OpenDrop;

  }
}
