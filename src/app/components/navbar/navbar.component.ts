import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
   isOpen = false;
isSticky = false;
  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  isVisible = true;

  closeBar() {
    this.isVisible = false;
  }

  ngOnInit() {
  window.addEventListener('scroll', () => {
    this.isSticky = window.scrollY > 20;
  });
}
}
