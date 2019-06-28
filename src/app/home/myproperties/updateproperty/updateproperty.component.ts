import { Component, OnInit, Input } from '@angular/core';
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
  @Input('property') property;
   path = "";
  isPropertyUpdated = false;

  constructor(public rentalService: RentalserviceService, public router: Router,
    private storage: AngularFireStorage, public authService: AuthService) {}

  ngOnInit() {
  }

  updateProperty(updaterentalform: NgForm) {
    let description, image, locality, price, title;
      description = updaterentalform.value.description;
      locality = updaterentalform.value.locality;
      price = updaterentalform.value.price;
      title = updaterentalform.value.title;
      if (this.path == '') {
        image = this.property.image
      }
      else {
        image = this.path
      }
    this.rentalService.updateRental({image, ...updaterentalform.value}, this.property.id).then(data => {
      updaterentalform.reset();
      this.isPropertyUpdated = true;
    }).catch(err => {
      console.log(err);
    });
  }

  selectFile(event) {
  const file = event.target.files[0];
  const date = new Date();
    const unique =  '/rentals/' + date;
    console.log(unique);
    const task = this.storage.upload(unique, file).then(data => {
      this.path = unique;
      console.log(this.path);
      console.log(data);
    }).catch(err => {
        console.log(err);
    });
}

}
