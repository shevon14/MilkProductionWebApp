import { AdminComponent } from './admin/admin.component';
import { EditItemsComponent } from './store/edit-items/edit-items.component';
import { CartComponent } from './cart/cart.component';
import { AddItemsComponent } from './store/add-items/add-items.component';
import { ViewItemsComponent } from './store/view-items/view-items.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { SellerRegisterComponent } from './seller-register/seller-register.component';
import { SellerLoginComponent } from './seller-login/seller-login.component';
import { RecipesComponent } from './recipes/recipes.component';
import { HomeComponent } from './home/home.component';
import { CustomersRegisterComponent } from './customers/customers-register/customers-register.component';
import { CustomersLoginComponent } from './customers/customers-login/customers-login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path: 'recipes', component: RecipesComponent},
  {path: 'products', component : ProductsComponent},
  {path: 'sellerLogIn', component: SellerLoginComponent},
  {path: 'sellerRegister', component : SellerRegisterComponent},
  {path: 'store', component: ViewItemsComponent},
  {path: 'addItems', component: AddItemsComponent},
  {path : 'editItems', component: EditItemsComponent},
  {path: 'customerLogIn', component: CustomersLoginComponent},
  {path: 'customerRegister', component : CustomersRegisterComponent},
  {path: 'cart', component: CartComponent},
  {path: 'about', component: AboutComponent},
  {path : 'contact', component: ContactUsComponent},
  {path: 'admin', component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
