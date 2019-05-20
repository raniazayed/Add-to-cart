import { LoginService } from './services/login.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Simport { AuthGuard } from './services/auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {MatDialogModule,MatSelectModule,MatCheckboxModule,MatMenuModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatInputModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HeaderComponent } from './header/header.component';
import { ShopinglistComponent } from './shopinglist/shopinglist.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { ShoppingCartComponent } from './header/navbar/shopping-cart/shopping-cart.component';
import { ProductItemComponent } from './shopinglist/product-item/product-item.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './shopinglist/product-item/product-details/product-details.component';
import { FormsComponent } from './forms/forms.component';
import { SignupComponent } from './signup/signup.component';
import {FileUploadModule} from 'primeng/fileupload';
import { AlertComponent } from './components/alert/alert.component';
import { FilterPipe } from './pipes/filter.pipe';
import { CheckoutformComponent } from './header/navbar/shopping-cart/checkoutform/checkoutform.component';
import { AuthGuard } from './services/auth.guard';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShopinglistComponent,
    NavbarComponent,
    ShoppingCartComponent,
    ProductItemComponent,
    FooterComponent,
    NotFoundComponent,
    HomeComponent,
    ProductDetailsComponent,
    FormsComponent,
    SignupComponent,
    AlertComponent,
    FilterPipe,
    CheckoutformComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    
    // MaterialModule,
    // MatDialogModule,
    // MatCheckboxModule,
    // MatSelectModule,
    // MatMenuModule,
    MatInputModule,
    HttpClientModule,
    FileUploadModule

  ],
  providers: [LoginService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
