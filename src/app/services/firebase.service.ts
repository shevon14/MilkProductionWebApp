import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: AngularFirestore) { }

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


}
