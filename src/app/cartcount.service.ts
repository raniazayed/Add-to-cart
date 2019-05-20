import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Producttype } from './interface/producttype';
import { element } from '@angular/core/src/render3';
import { jsonpCallbackContext } from '@angular/common/http/src/module';

@Injectable({
  providedIn: 'root'
})
export class CartcountService {

  jsonUrl:string='assets/products.json';
  cartItems:any=[];

  private cartCount = new BehaviorSubject(0);
  currentCount = this.cartCount.asObservable();

  private Price = new BehaviorSubject(0);
  currentPrice = this.Price.asObservable();
  countItem: void;
  item: any;
  cart = [] ;

  private cartProducts = new BehaviorSubject([]);
  currentCart = this.cartProducts.asObservable();

  
  constructor(private http:HttpClient) { 
    console.log(this.currentCount);
   }
  //  GET PRODUCTS DATA FROM JSON
   getProducts():Observable<Producttype[]>{
    return this.http.get<Producttype[]>(this.jsonUrl);

   }
  addtocart(count:number){
    console.log(this.cartCount)
    this.cartCount.next(count);
    this.countItem =localStorage.setItem('count',JSON.stringify(count));
    console.log(this.countItem)
    

  }
  // count total price of products in the cart
  totalPrice(price:number){
    this.Price.next(price)
  }
  saveCartItems(itemObj){
    // this.cartItems.push(itemObj);
    // console.log(this.cartItems)
    // debugger;

    // if(this.cart.length>0){
    //     this.cart= this.cart.map(element=>{
    //     console.log(element.prodid);
    //     console.log(itemObj.prodid);
    //     if(itemObj.prodid==element.prodid){
    //       itemObj.coun ++;
    //       console.log(itemObj.coun)
    //     }else{
    //       console.log('else')
    //       this.cart.push(itemObj)
    //     }
    //     console.log(element)
    //     return this.cart;
    //   })
    // }else{
    //   this.cart.push(itemObj);
    //   console.log(this.cart)

    // }
    // console.log(this.cart)


    
      // let item = this.cart.filter(element => {
      //   if (element.id == itemObj.id) {
      //     element.coun++;
      //     console.log(element.coun)
      //     return element;
      //   }
      // });
      // //element don't exist
      // if (item.length == 0) {
      //   this.cart.push(itemObj);
      // }
      // console.log(this.cart)
      // console.log(item);

     if(this.cart.includes(itemObj)){
        itemObj.coun++;
       console.log(this.cart)
      }else{
        this.cart.push(itemObj);
        console.log(this.cart)

      }
      console.log(this.cart)

      

      // this.count++;
      // this.total+=newitem.realPrice;
      // this.countnum.next(this.count);
      // this.totalprice.next(this.total);
  
      // this.saveINlocalStorage();
    
  
  }

}
