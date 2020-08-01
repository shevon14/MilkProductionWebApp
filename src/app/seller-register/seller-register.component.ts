import { AuthService } from './../services/auth.service';
import { FirebaseService } from './../services/firebase.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-register',
  templateUrl: './seller-register.component.html',
  styleUrls: ['./seller-register.component.scss']
})
export class SellerRegisterComponent implements OnInit {

  shopName : string;
  businessID : string;
  address : string;
  contact : number;
  email : string;
  password: string;

  constructor(private firebaseService : FirebaseService,
              public authService : AuthService,
              private router : Router) { }

  ngOnInit(): void {
  }

  CreateSeller(){
    let record = {};
    record['shopName'] = this.shopName;
    record['businessID'] = this.businessID;
    record['address'] = this.address;
    record['contact'] = this.contact;
    record['email'] = this.email;
    record['password'] = this.password;
    this.firebaseService.create_NewSeller(record).then(resp => {
      this.shopName = "";
      this.businessID = "";
      this.address = "";
      this.contact = undefined;
      this.email = "";
      this.password = "";
      console.log(resp);
      this.router.navigate(['sellerLogIn'])
    })
      .catch(error => {
        console.log(error);
      });
  }

}
