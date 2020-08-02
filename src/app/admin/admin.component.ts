import { NavbarService } from './../services/navbar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private navbarService:NavbarService) {
    this.navbarService.hide();
   }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    this.navbarService.show();
  }

}
