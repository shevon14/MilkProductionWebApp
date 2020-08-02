import { FirebaseService } from './../services/firebase.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private router : Router, 
    private firebaseService : FirebaseService) { }

  quantity: number = 1;
  totalprice : number;

  headElements = ['Name', 'Qtn.', 'Price', '' ,'Remove'];

  cartitems : any;

  ngOnInit(): void {
      this.firebaseService.read_Cartitems().subscribe(data => {
        this.cartitems = data.map(e => {
          return {
            id : e.payload.doc.id,
            pname : e.payload.doc.data()['ProductName'],
            pprice : e.payload.doc.data()['unitPrice'],
          };
        })
        this.calculateTotalAmount();
    });
    
  }

  minusBtnClicked(){
    // if(this.quantity == 1){
    //     //can't be minus
    // } else {
    //   this.quantity = this.quantity - 1;
    //   this.totalprice =  this.unitprice * this.quantity;
    // }
  }

  plusBtnClicked(){
    // this.quantity = this.quantity + 1 ;
    // this.totalprice =  this.unitprice * this.quantity;
  }

  calculateTotalAmount(){
    let amount = 0;
    for (let x of this.cartitems) {
      amount = amount + Number(x.pprice);
    }
    this.totalprice = amount;
  }

  deleteitmClicked(itemID){
    this.firebaseService.delete_ItemInCart(itemID);
  }

  checkoutClick(){
    this.router.navigate(["customerLogIn"]);
  }



}
