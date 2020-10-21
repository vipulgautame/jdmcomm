import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  vip1: boolean;
  shirtPrice: any;
  hoodyPrice: any;
  capPrice: any;


  constructor(public db: AngularFirestore, public authService: AuthService) {}

  ngOnInit(): void {
    this.shirtPrice = 30;
    this.hoodyPrice = 40;
    this.capPrice = 20;
    var docRef = this.db.collection("members").doc(firebase.auth().currentUser.email).ref.get()
    docRef.then(docSnapshot => {
      if (docSnapshot.exists) {
        this.shirtPrice = this.shirtPrice - 5;
        this.hoodyPrice = this.hoodyPrice - 5;
        this.capPrice = this.capPrice-5;
      }
    })
  }
  

}
