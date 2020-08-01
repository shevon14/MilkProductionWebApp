import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Injectable, NgZone } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { Seller } from './seller';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Save logged in seller data
  sellerData : any; 
  
  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,  
    public ngZone: NgZone) { 
        /* Saving seller data in localstorage when 
      logged in and setting up null when logged out */
      this.afAuth.authState.subscribe(seller => {
        if (seller) {
          this.sellerData = seller;
          localStorage.setItem('seller', JSON.stringify(this.sellerData));
          JSON.parse(localStorage.getItem('seller'));
        } else {
          localStorage.setItem('seller', null);
          JSON.parse(localStorage.getItem('seller'));
        }
      })
    }

   // Sign in with email/password
  SignIn(email, password) {
    return  this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['store']);
        });
       // this.SetSellerData(result.user);
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  // Sign up with email/password
  SignUp(email, password) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
       // this.SetSellerData(result.user);
      }).catch((error) => {
        window.alert(error.message)
      })
  }


  // Reset Forggot password
  ForgotPassword(passwordResetEmail) {
    return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      window.alert('Password reset email sent, check your inbox.');
    }).catch((error) => {
      window.alert(error)
    })
  }

  // Returns true when seller is looged in 
  get isLoggedIn(): boolean {
    const Seller = JSON.parse(localStorage.getItem('Seller'));
    return (Seller !== null && Seller.emailVerified !== false) ? true : false;
  }


  // Auth logic to run auth providers
  AuthLogin(provider) {
    return this.afAuth.signInWithPopup(provider)
    .then((result) => {
       this.ngZone.run(() => {
          this.router.navigate(['dashboard']);
        })
     // this.SetSellerData(result.user);
    }).catch((error) => {
      window.alert(error)
    })
  }

  // /* Setting up seller data when sign in with username/password, 
  // sign up with username/password and sign in with social auth  
  // provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  // SetSellerData(Seller) {
  //   const sellerRef: AngularFirestoreDocument<any> = this.afs.doc(`Sellers/${Seller.sid}`);
  //   const sellerData: Seller = {
  //     // businessID : Seller.businessID,
  //     // address : Seller.address,
  //     // contact : Seller.contact,
  //     //email : Seller.email
  //   }
  //   return sellerRef.set(sellerData, {
  //     merge: true
  //   })
  // }

  // Sign out 
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('Seller');
      this.router.navigate(['sellerLogIn']);
    })
  }
  
  

}
