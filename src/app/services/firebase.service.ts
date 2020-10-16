import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';



@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(public db: AngularFirestore) {}

  getEvents() {
    return this.db.collection('events').snapshotChanges();
  }


  addEventGuest(selectedEvent) {
    return this.db.collection('events').doc(selectedEvent).update({ "guestNames": firebase.firestore.FieldValue.arrayUnion(firebase.auth().currentUser.email) });
  }

  createEvent(value) {
    return this.db.collection('events').add({
      eventType: value.typeFormCtrl,
      date: value.dateFormCtrl,
      audienceCapacity: value.capacityFormCtrl,
      address: value.addressFormCtrl,
      guestNames: ['NONE'],
    });
  }
}