import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { EnquiryService } from 'src/app/service/enquiry.service';
import { NgForm } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-singleproperty',
  templateUrl: './singleproperty.component.html',
  styleUrls: ['./singleproperty.component.css']
})
export class SinglepropertyComponent implements OnInit {
  @Input('property') property
  image:any
  showMessage = false;
  showForm = false;
  constructor(public authService:AuthService,public enquiryService: EnquiryService,
    public storage: AngularFireStorage) { }

  ngOnInit() {
    console.log(this.property)
    this.image = this.storage.ref(this.property.image).getDownloadURL()
  }

  sendEnquiry(enquiryForm: NgForm){
    console.log(enquiryForm.value);
    this.showMessage = true;
    let title = this.property.title;
    let timestamp = new Date();
    let id = this.property.id;
    let ownerEmail = this.property.ownerEmail;
    let email = this.authService.getEmail();
    this.enquiryService.addEnquiry({email,ownerEmail,timestamp,id,title,...enquiryForm.value}).then(data=>{
      enquiryForm.reset();
      this.showForm = false;
    }).catch(err => {
      console.log(err);
    })

  }


}
