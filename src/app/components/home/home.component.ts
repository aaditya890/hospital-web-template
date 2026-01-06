import { Component } from '@angular/core';
import { TreatmentsComponent } from "../treatments/treatments.component";
import { DoctorsComponent } from "../doctors/doctors.component";
import { TestimonialsComponent } from "../testimonials/testimonials.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TreatmentsComponent, DoctorsComponent, TestimonialsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
