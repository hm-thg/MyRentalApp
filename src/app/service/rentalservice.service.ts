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
    // this.updateService.originalForm(rental)
    return this.db.collection('rentals').add({createdOn,...rental})
  }

  updateRental(rental,id){
    // console.log(rental)
    var docRef = this.db.collection("rentals").doc(id);

    let updatedOn = new Date()
    return docRef.update({
        createdOn:updatedOn,
        description:rental.description,
        image:rental.image,
        locality:rental.locality,
        price:rental.price,
        title:rental.title,
      })
      .then(function() {
          console.log("Document successfully updated!");
      })
      .catch(function(error) {
          console.error("Error updating document: ", error);
      });
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
