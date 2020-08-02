import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: AngularFirestore) { }

  // seller registartion 
  create_NewSeller(record) {
    return this.firestore.collection('Sellers').add(record);
  }

  read_Sellers() {
    return this.firestore.collection('Sellers').snapshotChanges();
  }

  update_Seller(recordID,record){
    this.firestore.doc('Sellers/' + recordID).update(record);
  }

  delete_Seller(record_id) {
    this.firestore.doc('Sellers/' + record_id).delete();
  }


  
  //customer registration
  create_NewCustomers(record) {
    return this.firestore.collection('Customers').add(record);
  }
  


  //add items 
  create_NewProduct(record){
    return this.firestore.collection('products').add(record);
  }

  //read products
  read_Products() {
    return this.firestore.collection('products').snapshotChanges();
  }

  //delete product
  delete_Product(record_id){
    this.firestore.doc('products/' + record_id).delete();
  }




  //add items to cart
  add_ItemToCart(record){
    return this.firestore.collection('cart').add(record);
  }

  //read cart items
  read_Cartitems() {
    return this.firestore.collection('cart').snapshotChanges();
  }

  //delete product
  delete_ItemInCart(record_id){
    this.firestore.doc('cart/' + record_id).delete();
  }




}
