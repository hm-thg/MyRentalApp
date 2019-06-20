import { Component, OnInit } from '@angular/core';
import { EnquiryService } from 'src/app/service/enquiry.service';

@Component({
  selector: 'app-enquiries',
  templateUrl: './enquiries.component.html',
  styleUrls: ['./enquiries.component.css']
})
export class EnquiriesComponent implements OnInit {
  enquiries=[]
  constructor(public enquiryService:EnquiryService) { }

  ngOnInit() {
    this.getEnquiries()
  }

  getEnquiries(){
    this.enquiryService.getEnquiries().subscribe(res=>{
      this.enquiries=res
      console.log(this.enquiries)
    })
  }

}
