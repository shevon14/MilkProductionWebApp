import { FirebaseService } from './../../services/firebase.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from "@angular/fire/storage";
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { map, finalize } from "rxjs/operators";

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.scss']
})
export class AddItemsComponent implements OnInit {

  constructor(private firebaseService : FirebaseService,
              private storage: AngularFireStorage,
              private router : Router) { }

  productName : string;
  category : string;
  sellerID : string;
  unitPrice : number;
  imgLink;

  selectedFile: File = null;
  downloadURL: Observable<string>;

  ngOnInit(): void {
  }

  CreateProduct(){
    let record = {};
    record['productName'] = this.productName;
    record['category'] = this.category;
    record['sellerID'] = 'seller document';
    record['unitPrice'] = this.unitPrice;
    record['imgLink'] = this.imgLink;
    this.firebaseService.create_NewProduct(record).then(resp => {
      this.productName = "";
      this.category= "";
      this.unitPrice = undefined;
      this.imgLink = "";
      console.log(resp);
      this.router.navigate(['store'])
    })
      .catch(error => {
        console.log(error);
      });
  }

  onFileSelected(event) {
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `ProductImages/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`ProductImages/${n}`, file);
    task
      .snapshotChanges()
      .pipe( 
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.imgLink = url;
            }
            console.log(this.imgLink);
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      });
  }


}


