import { Component, OnInit,Input } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { AuthService } from 'src/app/service/auth.service';
import { RentalserviceService } from '../../../service/rentalservice.service';

@Component({
  selector: 'app-updateproperty',
  templateUrl: './updateproperty.component.html',
  styleUrls: ['./updateproperty.component.css']
})
export class UpdatepropertyComponent implements OnInit {
  @Input('property') property
   path=""
  isPropertyUpdated: boolean = false

  constructor(public rentalService: RentalserviceService,public router: Router,
    private storage: AngularFireStorage, public authService: AuthService){}

  ngOnInit() {
  }

  updateProperty(updaterentalform:NgForm){
    let description,image,locality,price,title
    if(updaterentalform.value.description == "")
      description = this.property.description
    else
      description = updaterentalform.value.description

    // if(updaterentalform.value.image == "")
    //   image = this.property.image
    // else
    //   image = updaterentalform.value.path

    if(updaterentalform.value.locality == "")
      locality = this.property.locality
    else
      locality = updaterentalform.value.locality

    if(updaterentalform.value.price == "")
      price = this.property.price
    else
      price = updaterentalform.value.price

    if(updaterentalform.value.title == "")
      title = this.property.title
    else
      title = updaterentalform.value.title

    this.rentalService.updateRental({description,locality,price,title},this.property.id).then(data=>{
      updaterentalform.reset()
      this.isPropertyUpdated=true
    }).catch(err=>{
      console.log(err)
    })
  }

  selectFile(event){
  let file = event.target.files[0]
  let date = new Date()
    let unique =  '/rentals/' + date
    console.log(unique)
    let task = this.storage.upload(unique,file).then(data=>{
      this.path = unique
      console.log(this.path)
      console.log(data)
    }).catch(err=>{
        console.log(err)
    })
}

}
