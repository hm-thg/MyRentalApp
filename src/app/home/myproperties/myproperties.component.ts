import { AuthService } from 'src/app/service/auth.service';
import { RentalserviceService } from './../../service/rentalservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myproperties',
  templateUrl: './myproperties.component.html',
  styleUrls: ['./myproperties.component.css']
})
export class MypropertiesComponent implements OnInit {
  properties=[]
  myProperties=[]
  selectedProperty;
  mode:any='list' // list or single
  constructor(public rentalService:RentalserviceService,public authService:AuthService) { }

  ngOnInit() {
    this.getAllProperties()
  }

  getAllProperties(){
    this.rentalService.getAllRentals().subscribe(res=>{
      this.properties = res;
      this.getMyProperties(this.properties);
      console.log(this.properties);
    });
  }
  getMyProperties(myProperties){
    let j = 0
    for(var i = 0;i < myProperties.length;i++){
      if(this.authService.getEmail() == myProperties[i].ownerEmail)
        this.myProperties[j++] = myProperties[i]
    }
  }

  ViewDetails(property){
    this.mode='single';
    this.selectedProperty = property;
  }
  getOrdered(by:string){
    this.rentalService.getOrderedRentals(by).subscribe(data=>{
      this.properties=data
    })
  }
  search(searchkey:string){
    console.log(searchkey)
    this.rentalService.getByLocality(searchkey).subscribe(data=>{
      this.properties=data
    })
  }

}
