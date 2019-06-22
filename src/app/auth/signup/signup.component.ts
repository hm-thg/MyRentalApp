import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(public authService: AuthService, public router:Router) { }

  ngOnInit() {
  }

  uname(signUpForm: NgForm){
    this.authService.display = signUpForm.value.name;
    this.signUp(signUpForm)
  }
  signUp(signUpForm:NgForm){
    console.log(signUpForm.value)
    this.authService.addUser(signUpForm.value.email,signUpForm.value.password)
    signUpForm.reset()
  }

}
