import { Component } from '@angular/core';

@Component({
  selector: 'app-announcementbar',
  standalone: true,
  imports: [],
  templateUrl: './announcementbar.component.html',
  styleUrl: './announcementbar.component.scss'
})
export class AnnouncementbarComponent {
   isVisible = true;

  closeBar() {
    this.isVisible = false;
  }
}
