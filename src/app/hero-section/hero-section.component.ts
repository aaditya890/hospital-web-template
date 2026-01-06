import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
export interface Service {
  title: string;
  description: string;
  icon: string;
}
@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})

export class HeroSectionComponent {
   services: Service[] = [
    {
      title: 'Pediatrics',
      description: 'Gentle and expert care for children.',
      icon: '🧒',
    },
    {
      title: 'Dental Care',
      description: 'Advanced dental treatments for a confident smile.',
      icon: '🦷',
    },
  ];
}
