import { Component } from '@angular/core';
import { TestimonialsComponent } from "../testimonials/testimonials.component";
import { HeroSectionComponent } from '../../hero-section/hero-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TestimonialsComponent, HeroSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
