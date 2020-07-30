import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  RecipeClick(){
    this.router.navigate(['recipes']);
  }

  ShopLoginClicked(){
    this.router.navigate(['sellerLogIn']);
  }

  SingupClicked(){
    this.router.navigate(['customerRegister']);
  }
  SinginClicked(){
    this.router.navigate(['customerLogIn']);
  }

  ProductsClick(){
    this.router.navigate(['products']);
  }

  cartClicked(){
    this.router.navigate(['cart']);
  }

  AboutClick(){
    this.router.navigate(['about']);
  }

  ContactUsClick(){
    this.router.navigate(['contact']);
  }

}
