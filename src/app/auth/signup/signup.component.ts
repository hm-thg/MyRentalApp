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
  constructor(public authService:AuthService,public router:Router) { }

  ngOnInit() {
  }
  signUp(signUpForm:NgForm){
    console.log(signUpForm.value)
  }

}
