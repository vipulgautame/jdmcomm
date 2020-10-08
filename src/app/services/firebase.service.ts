import { NONE_TYPE } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(public db: AngularFirestore) {}

  getAvatars() {
    return this.db.collection('/avatar').valueChanges();
  }

  getUser(userKey) {
    return this.db.collection('users').doc(userKey).snapshotChanges();
  }

  updateUser(userKey, value) {
    value.nameToSearch = value.name.toLowerCase();
    return this.db.collection('users').doc(userKey).set(value);
  }

  deleteUser(userKey) {
    return this.db.collection('users').doc(userKey).delete();
  }

  getEvents() {
    return this.db.collection('events').snapshotChanges();
  }

  searchUsers(searchValue) {
    return this.db
      .collection('users', (ref) =>
        ref
          .where('nameToSearch', '>=', searchValue)
          .where('nameToSearch', '<=', searchValue + '\uf8ff')
      )
      .snapshotChanges();
  }

  addEventGuest(selectedEvent) {}

  loginUser(value) {
    return this.db
      .collection('users', (ref) => ref)

      .snapshotChanges();
  }

  searchUsersByAge(value) {
    return this.db
      .collection('users', (ref) => ref.orderBy('age').startAt(value))
      .snapshotChanges();
  }

  createUser(value) {
    return this.db.collection('users').add({
      name: value.name,
      nameToSearch: value.name.toLowerCase(),
      email: value.email,
      password: value.password,
    });
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
