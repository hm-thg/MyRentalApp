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
  constructor(public authService:AuthService,public router:Router) { }

  ngOnInit() {
  }
  signIn(signInForm:NgForm){
    console.log(signInForm.value)
    signInForm.reset()
    this.authService.logIn(signInForm.value.email,signInForm.value.password)
  }
}
