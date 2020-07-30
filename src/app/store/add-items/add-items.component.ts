import { FirebaseService } from './../../services/firebase.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.scss']
})
export class AddItemsComponent implements OnInit {

  constructor(private firebaseService : FirebaseService,
              private router : Router) { }

  productName : string;
  category : string;
  sellerID : string;
  unitPrice : number;
  imgLink : string;

  ngOnInit(): void {
  }

  CreateProduct(){
    let record = {};
    record['productName'] = this.productName;
    record['category'] = this.category;
    record['sellerID'] = 'seller document';
    record['unitPrice'] = this.unitPrice;
    record['imgLink'] = 'img link';
    this.firebaseService.create_NewProduct(record).then(resp => {
      this.productName = "";
      this.category= "";
      this.unitPrice = undefined;
      //this.imgLink = "";
      console.log(resp);
      this.router.navigate(['store'])
    })
      .catch(error => {
        console.log(error);
      });
  }


}
