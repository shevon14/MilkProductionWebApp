import { async } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirebaseService } from './../services/firebase.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { firestore } from 'firebase';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {


  constructor(private router : Router, private firestore: AngularFirestore,
                private firebaseService : FirebaseService) { }

  quantity: number = 1;
  unitprice : number = 100;
  totalprice : number = this.unitprice;

  butterProducts : any;
  milkProducts : any;
  cheeseProducts : any;
  yougurdProducts : any;

  products : any;

  ngOnInit(): void {
      this.firebaseService.read_Products().subscribe(data => {
        this.products = data.map(e => {
          return {
            id : e.payload.doc.id,
            name : e.payload.doc.data()['productName'],
            price : e.payload.doc.data()['unitPrice'],
            imglink : e.payload.doc.data()['imgLink'],
            category : e.payload.doc.data()['category']
          };
        })
        console.log(this.products);
    })
  }


  minusBtnClicked(){
    if(this.quantity == 1){
        //can't be minus
    } else {
      this.quantity = this.quantity - 1;
      this.totalprice =  this.unitprice * this.quantity;
    }
  }

  plusBtnClicked(){
    this.quantity = this.quantity + 1 ;
    this.totalprice =  this.unitprice * this.quantity;
  }

}
