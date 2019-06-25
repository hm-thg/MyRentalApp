import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root' //provided service at the root available for any classes
})
export class RentalserviceService {

  constructor(private db:AngularFirestore) { }

  addRental(rental){
    let createdOn = new Date()
    // let ownernum = this.authService.userDetails.pno
    // let ownername = this.authService.userDetails.name
    return this.db.collection('rentals').add({createdOn,...rental})
  }

  getAllRentals(){
    return this.db.collection('rentals').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
  getOrderedRentals(by){
    return  this.db.collection('rentals',ref=>ref.orderBy('price',by)).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
  getByLocality(searchkey){
    return this.db.collection('rentals',ref=>ref.where('locality','==',searchkey)).snapshotChanges().pipe(
       map(actions => actions.map(a => {
         const data = a.payload.doc.data() as any;
         const id = a.payload.doc.id;
         return { id, ...data };
       }))
     );
   }
}
