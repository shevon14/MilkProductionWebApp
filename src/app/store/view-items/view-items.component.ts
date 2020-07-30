import { FirebaseService } from './../../services/firebase.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.scss']
})
export class ViewItemsComponent implements OnInit {

  constructor(private router : Router,
              private firebaseService : FirebaseService) { }

  products : any;            

  ngOnInit(): void {
      this.firebaseService.read_Products().subscribe(data => {
          this.products = data.map(e => {
            return {
              id : e.payload.doc.id,
              name : e.payload.doc.data()['productName'],
              price : e.payload.doc.data()['unitPrice']
            };
          })
          console.log(this.products);
      })
  }

  elements: any = [
    {id: 1, name: 'rolex watch', price: 'Rs.3000'},
    {id: 2, name: 'head set',  price: 'Rs.1920'},
    {id: 3, name: 'mobile charger', price: 'Rs.600'},
  ];

  headElements = ['ID', 'Product', 'Price', 'Edit' ,'Remove'];

  AddItemClicked(){
    this.router.navigate(['addItems']);
  }

  editItemclicked(){
    this.router.navigate(['editItems']);
  }

  deleteItemclicked(productID){
    this.firebaseService.delete_Product(productID);
  }

}
