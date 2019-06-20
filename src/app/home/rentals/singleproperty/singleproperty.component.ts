import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { EnquiryService } from 'src/app/service/enquiry.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-singleproperty',
  templateUrl: './singleproperty.component.html',
  styleUrls: ['./singleproperty.component.css']
})
export class SinglepropertyComponent implements OnInit {
  @Input('property') property
  showForm:boolean=false
  constructor(public authService:AuthService,public enquiryService:EnquiryService) { }

  ngOnInit() {
  }

  sendEnquiry(enquiryForm:NgForm){
    console.log(enquiryForm.value)
    let title = this.property.title
    let timestamp=new Date()
    let id = this.property.id
    let ownerEmail=this.property.ownerEmail
    let email = this.authService.getEmail()
    this.enquiryService.addEnquiry({email,ownerEmail,timestamp,id,title,...enquiryForm.value}).then(data=>{
      enquiryForm.reset()
      this.showForm=false
    }).catch(err=>{
      console.log(err)
    })

  }


}
