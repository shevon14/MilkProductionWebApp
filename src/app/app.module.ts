import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {AngularFireStorageModule,AngularFireStorageReference,AngularFireUploadTask} from "@angular/fire/storage";

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { RecipesComponent } from './recipes/recipes.component';
import { SellerLoginComponent } from './seller-login/seller-login.component';
import { SellerRegisterComponent } from './seller-register/seller-register.component';
import { CustomersRegisterComponent } from './customers/customers-register/customers-register.component';
import { CustomersLoginComponent } from './customers/customers-login/customers-login.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ViewItemsComponent } from './store/view-items/view-items.component';
import { AddItemsComponent } from './store/add-items/add-items.component';
import { CartComponent } from './cart/cart.component';
import { EditItemsComponent } from './store/edit-items/edit-items.component';
import { AdminComponent } from './admin/admin.component';
import { CategoryFilterPipe } from './pipes/category-filter.pipe';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    RecipesComponent,
    SellerLoginComponent,
    SellerRegisterComponent,
    CustomersRegisterComponent,
    CustomersLoginComponent,
    ProductsComponent,
    AboutComponent,
    ContactUsComponent,
    ViewItemsComponent,
    AddItemsComponent,
    CartComponent,
    EditItemsComponent,
    AdminComponent,
    CategoryFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireAuthModule,
    AppRoutingModule,
    AngularFireStorageModule,
    MDBBootstrapModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule
  ],
  providers: [AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
