import { CheckoutformComponent } from './header/navbar/shopping-cart/checkoutform/checkoutform.component';
import { AuthGuard } from './services/auth.guard';
import { ProductDetailsComponent } from './shopinglist/product-item/product-details/product-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './footer/footer.component';
import { ShopinglistComponent } from './shopinglist/shopinglist.component';
import { FormsComponent } from './forms/forms.component';
import { SignupComponent } from './signup/signup.component';
import { ShoppingCartComponent } from './header/navbar/shopping-cart/shopping-cart.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'checkoutform',component:CheckoutformComponent,canActivate: [AuthGuard]},
  {path: 'cart',  component: ShoppingCartComponent },
  {path:'shoppinglist',component:ShopinglistComponent},
  {path:'footer',component:FooterComponent},
  {path:'productdetails',component:ProductDetailsComponent},
  {path:'forms',component:FormsComponent},
  {path:'signup',component:SignupComponent},
  { path: 'item/:id',  component: ProductDetailsComponent },
  {path:'**',component:NotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
