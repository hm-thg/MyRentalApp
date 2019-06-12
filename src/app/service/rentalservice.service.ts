import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' //provided service at the root available for any classes
})
export class RentalserviceService {

  constructor(private db:AngularFirestore) { }

  addRental(rental){
    let createdOn = new Date()
    return this.db.collection('rentals').add({createdOn,...rental})
  }

  getAllRentals(){
    return this.db.collection('rentals').valueChanges()
  }
}
