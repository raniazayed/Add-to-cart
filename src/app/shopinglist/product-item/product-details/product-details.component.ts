import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CartcountService } from 'src/app/cartcount.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productId: any;
  count: any;
  total: number;
  getCount:any


  constructor( private route:ActivatedRoute,private countser:CartcountService,
    private router:Router,private cartser:CartcountService) { 
      this.cartser.currentCount.subscribe(count=>{
        this.count=count;
      });
      
      this.countser.currentPrice.subscribe(total=>{
        this.total=total;
      })
    }
   
    public product:any = {}

  ngOnInit() {
    this.productId =this.route.snapshot.paramMap.get('id');
    this.cartser.getProducts()
    .subscribe((data)=>{
      console.log(data);
      this.product=data[this.productId]; 
      console.log(this.product);

    });

    this.getCount=JSON.parse(localStorage.getItem(this.productId));
    console.log(this.getCount)
    
  }

 
  addtocart(){
    this.getCount.coun +=1;
    this.cartser.addtocart(++this.count);
     localStorage.setItem(this.productId,JSON.stringify(this.getCount))
    
    this.totalPrice();
  
  }
  totalPrice() {
    this.total += this.product.price;
    console.log(this.total )
    this.cartser.totalPrice(this.total)
  }
  removeItem(){
    if(this.total===0||this.count===0){
      this.total=0;
      this.count=0
    }else{
      console.log(this.product);
      this.total -= this.product.price;
      this.cartser.addtocart(--this.count);
      this.cartser.totalPrice(this.total);
    }
    this.getCount.coun -=1;
     localStorage.setItem(this.productId,JSON.stringify(this.getCount));
     if(this.getCount.coun ===0||this.total===0){
      this.total=0;
      this.getCount.coun=0
     }
  }

}
