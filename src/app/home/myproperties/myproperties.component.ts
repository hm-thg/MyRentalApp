import { AuthService } from 'src/app/service/auth.service';
import { RentalserviceService } from './../../service/rentalservice.service';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-myproperties',
  templateUrl: './myproperties.component.html',
  styleUrls: ['./myproperties.component.css']
})
export class MypropertiesComponent implements OnInit {
  properties=[]
  myProperties=[]
  selectedProperty;
  mode:any='list'
  id:any

  constructor(public rentalService:RentalserviceService,public authService:AuthService,public db:AngularFirestore) { }

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

  update(property){
    this.mode='single';
    this.selectedProperty = property;
  }

  delete(property){
    // this.db.collection('rentals',ref=>ref.where('createdOn','==',property.createdOn)).snapshotChanges().pipe(
    //   map(actions => actions.map(a => {
    //      const data = a.payload.doc.data() as any;
    //      console.log(a.payload.doc.id)
    //      this.id = a.payload.doc.id;
    //      console.log('id')
    //   }))
    // );
    for(var i = 0;i < this.properties.length;i++){
      if(this.properties[i].createdOn == property.createdOn){
        this.id = this.properties[i].id
        break
      }
    }
    console.log(this.id)
    this.db.collection('rentals').doc(this.id).delete().then(function() {
      alert('The property has been removed')
      document.location.reload()
  }).catch(function(error) {
      console.error("Error removing document: ", error);
  });
  }

  getOrdered(by:string){
    this.rentalService.getOrderedRentals(by).subscribe(data=>{
      this.myProperties=data
    })
  }
  search(searchkey:string){
    console.log(searchkey)
    this.rentalService.getByLocality(searchkey).subscribe(data=>{
      this.myProperties=data
    })
  }

}
