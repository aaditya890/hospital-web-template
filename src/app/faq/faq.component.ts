import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export interface FaqItem {
  question: string;
  answer: string;
  open: boolean;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  faqs: FaqItem[] = [
    {
      question: 'How do I book an appointment with a doctor?',
      answer:
        'You can book an appointment by selecting your preferred doctor, choosing an available time slot, and confirming your details through our online booking system.',
      open: true,
    },
    {
      question: 'Do you provide emergency medical services?',
      answer:
        'Yes, we provide 24/7 emergency medical services. In case of an emergency, please visit our hospital immediately or contact our emergency helpline.',
      open: false,
    },
    {
      question: 'Can I access my medical reports online?',
      answer:
        'Yes, registered patients can securely access their medical reports and prescriptions through their patient dashboard.',
      open: false,
    },
    {
      question: 'How can I consult a doctor online?',
      answer:
        'You can consult a doctor online by booking a video consultation. Our specialists are available to provide expert medical advice from the comfort of your home.',
      open: false, // default open (like your reference)
    },
    {
      question: 'What insurance plans are accepted at the hospital?',
      answer:
        'We accept most major health insurance plans. For detailed information, please contact our support desk or visit the insurance section on our website.',
      open: false,
    },
  ];

  toggle(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }

}
