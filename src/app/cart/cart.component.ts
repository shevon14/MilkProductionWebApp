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

  // elements: any = [
  //   {id: 1, name: 'rolex watch', quantity: '1', price: 'Rs.3000'},
  //   {id: 2, name: 'head set', quantity: '2', price: 'Rs.1920'},
  //   {id: 3, name: 'mobile charger', quantity: '1', price: 'Rs.600'},
  // ];

  headElements = ['Name', 'Qtn.', 'Price', '' ,'Remove'];

  cartitems : any;
  quantity : number = 1;

  ngOnInit(): void {
    this.firebaseService.read_Cartitems().subscribe(data => {
      this.cartitems = data.map(e => {
        return {
          pname : e.payload.doc.data()['ProductName'],
          pprice : e.payload.doc.data()['unitPrice'],
        };
      })
  })
  }

}
