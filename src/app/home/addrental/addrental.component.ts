import { RentalserviceService } from './../../service/rentalservice.service';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-addrental',
  templateUrl: './addrental.component.html',
  styleUrls: ['./addrental.component.css']
})
export class AddrentalComponent implements OnInit {
  path=""
  isPropertyAdded: boolean = false
  constructor(public rentalService: RentalserviceService, public router: Router,
    private storage: AngularFireStorage, public authService: AuthService){}

  ngOnInit() {
  }
  addProperty(addrentalform:NgForm){
    console.log(addrentalform.value)
    let ownerEmail = this.authService.getEmail()
    let image = this.path
    console.log(image)
    console.log(this.path)
    this.rentalService.addRental({image,ownerEmail,...addrentalform.value}).then(data=>{
      addrentalform.reset()
      this.isPropertyAdded=true
    }).catch(err=>{
      console.log(err)
    })

  }
  selectFile(event){
  let file = event.target.files[0]
  let date = new Date()
    let unique =  '/rentals/' + date
    let task = this.storage.upload(unique,file).then(data=>{
      this.path = unique
      console.log(data)
    }).catch(err=>{
        console.log(err)
    })
}

}
