import { LoginService } from './../../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { CartcountService } from 'src/app/cartcount.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  cartprods: any;
  productId: any;
  count: any;
  total: number;
  getCount: any
  checkoutUser: any;
  constructor(private countser: CartcountService, private cartser: CartcountService,private route:Router,private loginser:LoginService) {

    this.cartser.currentCount.subscribe(count=>{
      this.count=count;
    });
    
    this.countser.currentPrice.subscribe(total=>{
      this.total=total;
    })
  }
  public product: any = {}

  ngOnInit() {
    // this.cartprods = this.countser.cartItems;
    // console.log(this.cartprods);
    this.cartprods = this.countser.cart;
    console.log(this.cartprods);
    
  }
  addtocart(id) {
    // this.getCount = JSON.parse(localStorage.getItem(id));
    // console.log(this.getCount)
    console.log(id)
    // this.getCount.coun += 1;
    this.cartser.addtocart(++this.count);
    // localStorage.setItem(this.productId, JSON.stringify(this.getCount))
    // this.totalPrice();
  }
  totalPrice() {
    this.total += this.product.price;
    console.log(this.total)
    this.cartser.totalPrice(this.total)
  }
  checkout(){
    this.route.navigate(['/checkoutform']);
  }
}
