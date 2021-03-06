import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './../../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers-register',
  templateUrl: './customers-register.component.html',
  styleUrls: ['./customers-register.component.scss']
})
export class CustomersRegisterComponent implements OnInit {

 
  firstName : string;
  postalcode : string;
  address : string;
  contact : number;
  email : string;
  password: string;

  constructor(private firebaseService : FirebaseService,
              private router : Router) { }

  ngOnInit(): void {
  }
  CreateCustomer(){
    let record = {};
    record['Name'] = this.firstName;
    record['postalCode'] = this.postalcode;
    record['address'] = this.address;
    record['contact'] = this.contact;
    record['email'] = this.email;
    record['password'] = this.password;
    this.firebaseService.create_NewCustomers(record).then(resp => {
      this.firstName = "";
      this.postalcode = "";
      this.address = "";
      this.contact = undefined;
      this.email = "";
      this.password = "";
      console.log(resp);
      this.router.navigate(['customerRegister'])
      
    })
      .catch(error => {
        console.log(error);
      });
  }

}
