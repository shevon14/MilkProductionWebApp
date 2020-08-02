import { FirebaseService } from './../services/firebase.service';
import { NavbarService } from './../services/navbar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private navbarService:NavbarService,
              private firebaseService : FirebaseService) {
           this.navbarService.hide();
   }

   sellers : any;
   customers : any;
   products : any;

  ngOnInit(): void {
        this.firebaseService.read_Products().subscribe(data => {
          this.products = data.map(e => {
            return {
              id : e.payload.doc.id,
              imglink : e.payload.doc.data()['imgLink'],
              name : e.payload.doc.data()['productName'],
              price : e.payload.doc.data()['unitPrice']
            };
          })
          console.log(this.products);
      });

      this.firebaseService.read_Sellers().subscribe(data => {
        this.sellers = data.map(e => {
          return {
            id : e.payload.doc.id,
            name : e.payload.doc.data()['shopName'],
            bid : e.payload.doc.data()['businessID'],
            email : e.payload.doc.data()['email'],
            contact : e.payload.doc.data()['contact'],
            address : e.payload.doc.data()['address']
          };
        })
        console.log(this.sellers);
    });

    this.firebaseService.read_Customers().subscribe(data => {
      this.customers = data.map(e => {
        return {
          id : e.payload.doc.id,
          name : e.payload.doc.data()['Name'],
          contact : e.payload.doc.data()['contact'],
          address : e.payload.doc.data()['address'],
          email : e.payload.doc.data()['email']
        };
      })
      console.log(this.customers);
  })

  }

  ngOnDestroy(){
    this.navbarService.show();
  }

  productTable = ['Product', 'Name', 'Price'];
  customerTable = ['Name', 'Address', 'Contact', 'Email'];
  sellerTable = ['Shop Name', 'Reg. ID', 'Address', 'Contact', 'Email'];





}
