import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  displayedColumns = ['type', 'date', 'capacity', 'address'];

  allEvents: Array<any>;
  constructor(public firebaseService: FirebaseService) {}
  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.firebaseService.getEvents().subscribe((result) => {
      this.allEvents = result;
    });
  }
}
