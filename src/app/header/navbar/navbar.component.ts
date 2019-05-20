import { Component, OnInit, HostListener } from '@angular/core';
import { CartcountService } from 'src/app/cartcount.service';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { element } from '@angular/core/src/render3';

export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  count:number;
  price: number;
  getHeaderCount: any;
  defaultImg= 'assets/images/user.png';
  img: any;
  logoutUser: any;

  constructor(private countser:CartcountService,private loginser:LoginService,private router:Router) { 
    this.getHeaderCount=JSON.parse(localStorage.getItem('count'));
    console.log(this.getHeaderCount)
    this.countser.currentCount.subscribe((count)=>{
      this.count=count;
      console.log(count)

    }
    )
    this.countser.currentPrice.subscribe(price=>{
      this.price=price;
    })
  }
  @HostListener('load')

  imgLoad() {
    window.onload = ()=> {

    }
  }
  ngOnInit() {
    

    this.img=this.loginser.selectedImg;
    console.log(this.img)
    this.defaultImg = `../../assets/images/${this.img}`;

    // this.defaultImg=`../../assets/images/anonymous-user.png`;
    // if(this.defaultImg !== this.img){
    //   this.defaultImg = `../../assets/images/${this.img}`;
    //   console.log(this.img)
    //   console.log('no default')
    // }
    console.log(this.defaultImg)
  }

  logout(){
    alert('Are u sure u want log out?');
    this.logoutUser=this.loginser.removedUser;
    // console.log( this.logoutUser)
    const filteredUsers = JSON.parse( localStorage.getItem('users')).filter(item =>
      this.logoutUser.email!==item.email
       
      
    )
      
    
  console.log(filteredUsers)
   localStorage.setItem('users',JSON.stringify(filteredUsers))
   console.log(localStorage.getItem('users'))

    this.router.navigate(['/forms']);

  }
  
}
