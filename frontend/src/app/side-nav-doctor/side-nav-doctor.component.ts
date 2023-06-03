import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav-doctor',
  templateUrl: './side-nav-doctor.component.html',
  styleUrls: ['./side-nav-doctor.component.css']
})
export class SideNavDoctorComponent {
  isSidebarOpen: boolean = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

}
