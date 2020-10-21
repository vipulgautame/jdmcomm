import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { AuthService } from './auth.service';



@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  vip1: String;
  constructor(public db: AngularFirestore, public authService: AuthService) {}

  getEvents() {
    return this.db.collection('events').snapshotChanges();
  }

  addEventGuest(selectedEvent) {
    return this.db.collection('events').doc(selectedEvent).update({ "guestNames": firebase.firestore.FieldValue.arrayUnion(firebase.auth().currentUser.email) });
  }  

  addMember() {
      

     /*var docRef = this.db.collection("members").doc(firebase.auth().currentUser.email).ref.get()
      docRef.then(docSnapshot => {
        if (docSnapshot.exists) {
          this.vip1 = "you are a member now!"
        }*/
    
    this.db.collection('members').doc(firebase.auth().currentUser.email).set({});
    this.vip1 = "You are a Member of JDM Community"
    return this.vip1;
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