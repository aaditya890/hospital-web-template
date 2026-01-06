import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

export interface Treatment {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-treatments',
  standalone: true,
  imports: [NgFor],
  templateUrl: './treatments.component.html',
  styleUrl: './treatments.component.scss'
})
export class TreatmentsComponent {
  treatments: Treatment[] = [
    {
      title: 'Cardiology',
      description: 'Diagnosis and treatment of heart & cardiovascular conditions.',
      icon: '❤️',
    },
    {
      title: 'Neurology',
      description: 'Treatment of nervous system disorders, the brain & spinal cord.',
      icon: '🧠',
    },
    {
      title: 'Dental Care',
      description: 'Dental Health Department is committed to providing care.',
      icon: '🦷',
    },
    {
      title: 'Mental Health',
      description: 'Diagnosis and treatment of mental health disorders.',
      icon: '💭',
    },
    {
      title: 'Medicine',
      description: 'Routine check-ups, preventive care & chronic management.',
      icon: '💊',
    },
    {
      title: 'Orthopedics',
      description: 'Care for bones, joints, muscles, and ligaments.',
      icon: '🦴',
    },
  ];
}
