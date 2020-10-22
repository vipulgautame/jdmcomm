import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-broadcast',
  templateUrl: './broadcast.component.html',
  styleUrls: ['./broadcast.component.css']
})
export class BroadcastComponent implements OnInit {

  allMsg: Array<any>;

  constructor(
    public firebaseService: FirebaseService,
    public authService: AuthService
  ) {}
  ngOnInit(): void {
    this.getData();
  }
  
  getData() {
    this.firebaseService.getMessages().subscribe((result) => {
      this.allMsg = result;
    });
  }
}