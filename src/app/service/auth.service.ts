import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public FirebaseAuth:AngularFireAuth) { }

  logIn(email,password){
    this.FirebaseAuth.auth.signInWithEmailAndPassword(email,password).then(data=>{
      console.log(data)
    }).catch(err=>{
      console.log(err)
    })
  }
}
