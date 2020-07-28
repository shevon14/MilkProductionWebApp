import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './../../services/firebase.service';

@Component({
  selector: 'app-customers-register',
  templateUrl: './customers-register.component.html',
  styleUrls: ['./customers-register.component.scss']
})
export class CustomersRegisterComponent implements OnInit {

 
  firstName : string;
  lastName : string;
  address : string;
  contact : number;
  email : string;
  password: string;

  constructor(private firebaseService : FirebaseService) { }

  ngOnInit(): void {
  }
  CreateCustomer(){
    let record = {};
    record['firstName'] = this.firstName;
    record['lastName'] = this.lastName;
    record['address'] = this.address;
    record['contact'] = this.contact;
    record['email'] = this.email;
    record['password'] = this.password;
    this.firebaseService.create_NewCustomers(record).then(resp => {
      this.firstName = "";
      this.lastName = "";
      this.address = "";
      this.contact = undefined;
      this.email = "";
      this.password = "";
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }

}
