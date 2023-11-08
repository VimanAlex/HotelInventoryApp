import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login-service/login.service';

@Component({
  selector: 'hinv-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email:string = '';
  password:string = '';
  invalidMessage:string = '';

  constructor(private route:Router,private loginService:LoginService){}
  ngOnInit(): void {}

  Login(loginForm:NgForm){
 
    if(this.loginService.login(this.email,this.password)){
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
