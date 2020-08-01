import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-login',
  templateUrl: './seller-login.component.html',
  styleUrls: ['./seller-login.component.scss']
})

export class SellerLoginComponent implements OnInit {

  constructor(private router: Router,
              public authService : AuthService,
              private firebaseService : FirebaseService) {
              }

  inputEmail : string;
  inputPassword : string;            
       
  sellers : any;

  ngOnInit(): void {
      this.firebaseService.read_Sellers().subscribe(data => {
        this.sellers = data.map(e => {
          return {
            id : e.payload.doc.id,
            email : e.payload.doc.data()['email'],
            password : e.payload.doc.data()['password']
          };
        })
    })
  }
  
  signInClicked(){
    // if(this.inputEmail == this.sellers.email && this.inputPassword == this.sellers.password){
    //   console.log("ok");
    // } else {
    //   console.log("Wrong");
    // }
    this.router.navigate(['store']);
  }

  SwitchToSignUP(){
    this.router.navigate(['sellerRegister']);
  }

}
