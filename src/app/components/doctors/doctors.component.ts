import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

export interface Doctor {
  name: string;
  specialty: string;
  image: string;
}
@Component({
  selector: 'app-doctors',
  standalone: true,
  imports: [NgFor],
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.scss'
})

export class DoctorsComponent {
  doctors: Doctor[] = [
    {
      name: 'Dr. Leslie Alexander',
      specialty: 'Dental Surgery',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54',
    },
    {
      name: 'Dr. Kathryn Murphy',
      specialty: 'Podiatric Medicine',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d',
    },
    {
      name: 'Dr. Robert Fox',
      specialty: 'Gastroenterologist',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d',
    },
    {
      name: 'Dr. Esther Howard',
      specialty: 'Thoracic Surgeons',
      image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e',
    },
    {
      name: 'Dr. Albert Flores',
      specialty: 'Intern Neurologist',
      image: 'https://images.unsplash.com/photo-1606813902914-4f1fbb2c1d9c',
    },
    {
      name: 'Dr. Jerome Bell',
      specialty: 'Obstetrics & Gynecologists',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2',
    },
    {
      name: 'Dr. Arlene McCoy',
      specialty: 'Cardiologists',
      image: 'https://images.unsplash.com/photo-1612531386530-97286d97c2d2',
    },
    {
      name: 'Dr. Jenny Wilson',
      specialty: 'Intern Dermatologist',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f',
    },
  ];
}
