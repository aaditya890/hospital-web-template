import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)
    },
    {
        path:'about-us',
        loadComponent: () => import('./components/about-us/about-us.component').then(m => m.AboutUsComponent)
    },
    {
        path:'treatments',
        loadComponent: () => import('./components/treatments/treatments.component').then(m => m.TreatmentsComponent)
    },
    {
        path:'doctors',
        loadComponent: () => import('./components/doctors/doctors.component').then(m => m.DoctorsComponent)
    },
    {
        path:'gallery',
        loadComponent: () => import('./components/gallery/gallery.component').then(m => m.GalleryComponent)
    },
    {
        path:'appointment',
        loadComponent: () => import('./components/appointment/appointment.component').then(m => m.AppointmentComponent)
    },
    {
        path:'contact-us',
        loadComponent: () => import('./components/contact-us/contact-us.component').then(m => m.ContactUsComponent)
    },
    {
        path:'',
        pathMatch: 'full',
        redirectTo: ''
    }
];
