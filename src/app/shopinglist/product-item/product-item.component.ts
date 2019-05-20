import { Component, OnInit, Input } from '@angular/core';
import { CartcountService } from 'src/app/cartcount.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() prodItem;
  @Input() id;

  count: any ; 
  total: number;
  obj:object ={};
  coun:number;
  count1:number
  countitem: any=0;

  constructor(private cartser: CartcountService,private countser:CartcountService,private router: Router) {
    this.cartser.currentCount.subscribe(count=>{
      this.count=count;

    });
    this.countser.currentPrice.subscribe(total=>{
      this.total=total;
    })
  }

ngOnInit() {
 console.log(this.id)
  }
  addtocart(prodid,price,category,prodImage,prodName) {
    this.cartser.addtocart(++this.count)
    console.log(this.count);
    this.totalPrice();
    this.obj={
      prodid,
      price,
      category,
      prodImage,
      prodName,
      coun:this.countitem++
    }
    console.log(this.obj)
    this.cartser.saveCartItems(this.obj)
    localStorage.setItem(prodid,JSON.stringify(this.obj));
  }
  totalPrice() {
    console.log(this.prodItem)
      this.total += this.prodItem.price;
    console.log(this.total )
    this.cartser.totalPrice(this.total)
  }
  removeItem(){
    if(this.total===0||this.count===0){
      this.total=0;
      this.count=0
    }else{
      console.log(this.prodItem);
      this.total -= this.prodItem.price;
      this.cartser.addtocart(--this.count);
      this.cartser.totalPrice(this.total);
    }
  }

  // SHOW PRODUCT DETAILS
public gotoProductDetails(url, id) {
  this.router.navigate([url, id]).then( (e) => {
    console.log(id)
    if (e) {
      console.log("Navigation is successful!");
    } else {
      console.log("Navigation has failed!");
    }
  });
}

}
