import { Component } from '@angular/core';
import { TestimonialsComponent } from "../testimonials/testimonials.component";
import { HeroSectionComponent } from '../../hero-section/hero-section.component';
import { FaqComponent } from "../../faq/faq.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TestimonialsComponent, HeroSectionComponent, FaqComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
