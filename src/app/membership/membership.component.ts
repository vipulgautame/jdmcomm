import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent implements OnInit {
  vip1: String;

  constructor(public firebaseService: FirebaseService, public authService: AuthService) {}

  ngOnInit(): void {
  }

  becomeMember() {
    
  this.vip1 = this.firebaseService.addMember();
    
  }
  withdrawMember() {
    
  this.vip1 = this.firebaseService.removeMember();
    
  }

}
