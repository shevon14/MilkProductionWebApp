import { NavbarService } from './services/navbar.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MilkProductionWebApp-frontend';
  navbarStatus = true;

  constructor(private navbarService: NavbarService) {
    this.navbarStatus = navbarService.getNavbarStatus();
    this.navbarService.navbarStatusChanged.subscribe((newStatus) => {
      this.navbarStatus = newStatus;
    });
  }

}
