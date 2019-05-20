import { LoginService } from './../../../../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkoutform',
  templateUrl: './checkoutform.component.html',
  styleUrls: ['./checkoutform.component.scss']
})
export class CheckoutformComponent implements OnInit {
  checkoutUser: any;

  constructor(private loginser:LoginService) { }

  ngOnInit() {
    this.checkoutUser=this.loginser.currentUser[0].email
    console.log(this.checkoutUser)
  }

}
