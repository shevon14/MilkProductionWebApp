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
  {path: 'sellerLogIn', component: SellerLoginComponent},
  {path: 'sellerRegister', component : SellerRegisterComponent},
  {path: 'customerLogIn', component: CustomersLoginComponent},
  {path: 'customerRegister', component : CustomersRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
