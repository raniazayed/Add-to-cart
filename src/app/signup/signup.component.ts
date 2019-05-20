import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  userobj: object
  // id: number=0;
  constructor(private router: Router,
    private title: Title, private Loginser: LoginService) {
    this.title.setTitle('signup')
  }

  ngOnInit() {
    this.signupForm = new FormGroup({
      email: new FormControl(null, [Validators.required, this.validateEmail]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(12), this.validatePassword]),
      confirmPassword: new FormControl(null, [Validators.required])
    })
    // console.log(this.userobj)
  }

  validatePassword(control: FormControl): { [s: string]: boolean } {
    const patt = /[a-z]/g;
    const pattcapital = /[A-Z]/g;
    const pattdig = /\d/g;
    const pattspecial = /\W/g;

    if (patt.test(control.value) == true && pattdig.test(control.value) == true && pattspecial.test(control.value) == true && pattcapital.test(control.value) == true) {
      console.log(' valid');
      return null;
    }
    else {
      return { 'passworderror': true }
    }
  }
  validateEmail(control: FormControl): { [s: string]: boolean } {
    var valid = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log('hi')
    if (valid.test(control.value)) {
      console.log(control.value);
      // var saveedEmail = localStorage("email",control.value);
      return null; // vaild
    }
    return { 'validationError': true } //invalid
  }
  selectedImge: File = null;
  onFileSelected(event) {
    // console.log(event)
    this.selectedImge = event.target.files[0];
    console.log(this.selectedImge)
  }
  // upload() {
  //   this.Loginser.upload(this.selectedImge)
  // }
  
  onSubmit() {
    console.log(this.signupForm.get('email'))
    console.log(this.signupForm.get('password'));
    console.log(this.signupForm.get('confirmPassword'));
    this.userobj = {
      'email': this.signupForm.get('email').value,
      'password': this.signupForm.get('password').value,
      'userImg': this.selectedImge.name,

    }
    console.log(this.selectedImge.name);
    let users = JSON.parse(localStorage.getItem('users')) || [];
    
    if ((this.signupForm.get('password').valid) && this.signupForm.get('email').valid && this.signupForm.get('confirmPassword').value == (this.signupForm.get('password').value)) {
     

      console.log(this.selectedImge.name)
      // console.log(this.id)
      // localStorage.setItem(`userlogin${++this.id}`, JSON.stringify(this.userobj));
      // this.userobj.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;

      users.push(this.userobj)

      localStorage.setItem('users', JSON.stringify(users));
      console.log(users)
      this.Loginser.upload(this.selectedImge.name)
      // this.Loginser.upload(users)

      console.log('signup');
      this.router.navigate(['']);
    }


  }

}


