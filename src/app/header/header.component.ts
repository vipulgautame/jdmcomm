import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  

  constructor(private router: Router, public authService: AuthService) {

  }

  ngOnInit(): void {
  }


  logout() {
    this.authService.doLogout().then((error) => {
      console.log('Logout error', error);
    });
    this.router.navigate(['login']);
  }
}
