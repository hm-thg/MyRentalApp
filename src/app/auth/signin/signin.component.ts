import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  // loginError = "typing";
  // showError = false;
  constructor(public authService: AuthService, public router: Router) { }
  ngOnInit() {
  }
  signIn(signInForm:NgForm){
    console.log(signInForm.value);
    this.authService.logIn(signInForm.value.email, signInForm.value.password);
    // this.loginError = this.authService.lError;
    // this.showError = true
    signInForm.reset();
  }
}
