import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  displayedColumns = ['type', 'date', 'capacity', 'address'];
  allEvents: Array<any>;
  selectedEvent: any;

  constructor(
    public firebaseService: FirebaseService,
    public authService: AuthService
  ) {}
  ngOnInit(): void {
    this.getData();
  }
  RowSelected(u: any) {
    this.selectedEvent = u.payload.doc.id; // declare variable in component.
  }
  getData() {
    this.firebaseService.getEvents().subscribe((result) => {
      this.allEvents = result;
    });
  }
}
