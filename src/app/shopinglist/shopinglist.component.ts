import { Component, OnInit } from '@angular/core';
import { CartcountService } from '../cartcount.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopinglist',
  templateUrl: './shopinglist.component.html',
  styleUrls: ['./shopinglist.component.scss']
})
export class ShopinglistComponent implements OnInit {

  filterednames='';

  constructor(private cartser: CartcountService,private router: Router) { }

public items:any = [];

  ngOnInit() {
    this.cartser.getProducts()
    .subscribe((data)=>{
      console.log(data);
      this.items = data;
      console.log(this.items)
     
    });

  }




}
