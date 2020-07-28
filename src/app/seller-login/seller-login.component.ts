import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-login',
  templateUrl: './seller-login.component.html',
  styleUrls: ['./seller-login.component.scss']
})
export class SellerLoginComponent implements OnInit {

  constructor(private router: Router,private firebaseService : FirebaseService) {}

  ngOnInit(): void {

  }

  SwitchToSignUP(){
    this.router.navigate(['sellerRegister']);
  }

}
