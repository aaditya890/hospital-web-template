import { Component } from '@angular/core';
import { TreatmentsComponent } from "../treatments/treatments.component";
import { DoctorsComponent } from "../doctors/doctors.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TreatmentsComponent, DoctorsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
