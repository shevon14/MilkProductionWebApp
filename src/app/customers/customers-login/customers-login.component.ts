import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers-login',
  templateUrl: './customers-login.component.html',
  styleUrls: ['./customers-login.component.scss']
})
export class CustomersLoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  SwitchToSignUP(){
    this.router.navigate(['customerRegister']);
  }

  signInClicked(){
    this.router.navigate(['products']);
  }

}
