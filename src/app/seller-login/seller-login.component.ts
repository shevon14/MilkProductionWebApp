import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-login',
  templateUrl: './seller-login.component.html',
  styleUrls: ['./seller-login.component.scss']
})
export class SellerLoginComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  SwitchToSignUP(){
    this.router.navigate(['sellerRegister']);
  }

}
