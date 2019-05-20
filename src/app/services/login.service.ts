import { Injectable } from '@angular/core';
import { element } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  selectedImg: any;
  removedUser: any;
  currentUser: any;

  constructor() { }
  upload(img){
    this.selectedImg  =  img;
    console.log(this.selectedImg)
  }

  logout(user){
    this.removedUser = user;
    console.log( this.removedUser);
  }
  isLoggedIn(logginUser){
    // return false;
    console.log(logginUser)
    this.currentUser = JSON.parse(localStorage.getItem('users')).map(element=>{

      if(logginUser.email==element.email){
      //   return true
      // }else{

      //   return false;
      // }
      return element
      }
    }) 
    console.log( this.currentUser )
    // return currentUser;

  
  }
}
