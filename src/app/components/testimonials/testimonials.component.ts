import { NgClass } from '@angular/common';
import { Component, HostListener } from '@angular/core';


interface Testimonial {
  text: string
  name: string
  role: string
  avatar: string
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [NgClass],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {

  currentIndex = 0;
  autoSlideDelay = 3500;
  autoSlideInterval: any;

 testimonials: Testimonial[] = [
  {
    text: "The doctors and staff were very professional and made me feel comfortable throughout my treatment. Clean facilities and clear guidance really stood out.",
    name: "Rahul Sharma",
    role: "Patient",
    avatar: "assets/review-users/1.webp"
  },
  {
    text: "I visited the hospital for a dental emergency and received immediate attention. The doctor explained everything clearly and the treatment was quick and effective.",
    name: "Amit Verma",
    role: "Emergency Patient",
    avatar: "assets/review-users/2.webp"
  },
  {
    text: "Smooth appointment process and very polite staff. The doctor took time to listen and suggested the best treatment without any rush.",
    name: "Neha Kapoor",
    role: "Dental Consultation Patient",
    avatar: "assets/review-users/3.webp"
  },
  {
    text: "Excellent hygiene and well-maintained facilities. The treatment was painless and post-care instructions were explained clearly.",
    name: "Rakesh Singh",
    role: "Treatment Patient",
    avatar: "assets/review-users/4.webp"
  },
  {
    text: "The doctors are skilled, calm, and caring. I felt confident and safe throughout my visit. Highly recommended for quality healthcare.",
    name: "Simran Kaur",
    role: "Regular Patient",
    avatar: "assets/review-users/5.webp"
  },
  {
    text: "I brought my parent here for treatment and the staff was extremely supportive. Clear communication and genuine care made a big difference.",
    name: "Vikram Mehta",
    role: "Patient Attendant",
    avatar: "assets/review-users/6.webp"
  },
  {
    text: "Very organized hospital with modern equipment and experienced doctors. Everything from registration to consultation was smooth.",
    name: "Sanjay Patel",
    role: "Outpatient",
    avatar: "assets/review-users/7.webp"
  },
  {
    text: "The staff ensured I was well informed and comfortable before the procedure. Recovery guidance was clear and helpful.",
    name: "Ankit Joshi",
    role: "Procedure Patient",
    avatar: "assets/review-users/8.webp"
  },
  {
    text: "Peaceful environment, friendly staff, and doctors who genuinely care. I am very satisfied with the overall experience.",
    name: "Pooja Nair",
    role: "Health Check-up Patient",
    avatar: "assets/review-users/9.webp"
  },
  {
    text: "Professional service with a patient-first approach. The entire experience felt smooth, respectful, and reassuring.",
    name: "Manoj Kulkarni",
    role: "Long-term Patient",
    avatar: "assets/review-users/10.webp"
  }
];


  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  get visibleTestimonials(): Testimonial[] {
    const len = this.testimonials.length;
    return [
      this.testimonials[(this.currentIndex - 1 + len) % len],
      this.testimonials[this.currentIndex],
      this.testimonials[(this.currentIndex + 1) % len],
    ];
  }

  getTestimonialClass(index: number): string {
    if (index === 1) {
      return 'scale-100 opacity-100 z-20 shadow-lg px-8 py-10';
    }
    return 'scale-90 opacity-60 z-10 px-6 py-8';
  }

  getDotClass(i: number) {
    return {
      'bg-[#7FB241] w-6': this.currentIndex === i,
      'bg-gray-300 w-2': this.currentIndex !== i,
    };
  }

  nextSlide(auto = false) {
    if (!auto) this.stopAutoSlide();
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  prevSlide() {
    this.stopAutoSlide();
    this.currentIndex =
      (this.currentIndex - 1 + this.testimonials.length) %
      this.testimonials.length;
  }

  goToSlide(i: number) {
    this.stopAutoSlide();
    this.currentIndex = i;
  }

  startAutoSlide() {
    this.stopAutoSlide();
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide(true);
    }, this.autoSlideDelay);
  }

  stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
      this.autoSlideInterval = null;
    }
  }

  @HostListener('window:keydown', ['$event'])
  onKey(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft') this.prevSlide();
    if (event.key === 'ArrowRight') this.nextSlide();
  }
}
