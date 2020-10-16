import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { ChatService } from './services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  userChats$;
  title = 'jdm';
  constructor(public auth: AuthService, public cs: ChatService) {}
  ngOnInit() {
    this.userChats$ = this.cs.getUserChats();
  }
}
