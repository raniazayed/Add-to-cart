import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { element } from '@angular/core/src/render3';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  loginForm: FormGroup;
  userData: any;
  userImg: any;
  id: any=1;
  userdefaultimg: void;

  
  constructor(  private router:Router,private loginser:LoginService,
    private title:Title) {
    this.title.setTitle('login')
   } 
  
  
  
  ngOnInit() {
    this.loginForm = new FormGroup ({
      email:new FormControl (null,[Validators.required,this.validateEmail]),
      password:new FormControl (null,[Validators.required])
    })

  }
 
   validateEmail(control:FormControl):{[s:string]:boolean} {
     var valid =/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     console.log('hi')
     if(valid.test(control.value)){
      console.log(control.value)
      return null ; // vaild
    }
    return {'validationError':true} //invalid
  }

  onSubmit(form){
    console.log(form)
    console.log(this.loginForm.get('email').value)
    console.log(this.loginForm.get('password').value);
    // this.userData = JSON.parse(localStorage.getItem(`userlogin${this.id}`)) ;
    this.userData = JSON.parse(localStorage.getItem('users')) ;

    this.userData.map(element=>{
      if(this.loginForm.get('email').value==element.email&&this.loginForm.get('password').value==element.password){
        this.loginser.upload(element.userImg)
        console.log(this.userImg)
        console.log('valid');
        this.loginser.logout(element);
        this.loginser.isLoggedIn(element)
        this.router.navigate(['']);
      
      }
    })
 

  }
}

