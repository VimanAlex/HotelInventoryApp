import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'hinv-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email:string = '';
  password:string = '';
  invalidMessage:string = '';

  constructor(private route:Router){}
  ngOnInit(): void {}

  Login(loginForm:NgForm){
 
    if(this.email === "vimanalex@gmail.com" && this.password === "123456"){
      // alert(`Welcome ${this.email} to the admin page`);
      this.route.navigateByUrl('/rooms');
    }
    else
    {
      loginForm.resetForm({email:"",password:""});
      this.invalidMessage = "Email or password are incorect!";
      
    }
  }
}
