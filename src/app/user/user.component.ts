import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';
interface Event {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'page-user',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.css'],
})
export class UserComponent implements OnInit {
  formDate: Date;
  formGroup: FormGroup;

  events: Event[] = [
    { value: 'car-meet', viewValue: 'Car meet' },
    { value: 'track-day', viewValue: 'Track day' },
    { value: 'drag-event', viewValue: 'Drag races' },
    { value: 'car-show', viewValue: 'Car show' },
    { value: 'charity-auction', viewValue: 'Charity auction' },
    { value: 'night-ride', viewValue: 'Night ride' },
  ];

  minDate: Date;

  constructor(
    public userService: UserService,
    public authService: AuthService,
    private router: Router,
    private location: Location,
    private _formBuilder: FormBuilder,
    public firebaseService: FirebaseService
  ) {
    this.minDate = new Date();
  }

  ngOnInit(): void {
    this.formGroup = this._formBuilder.group({
      typeFormCtrl: [''],
      dateFormCtrl: [''],
      capacityFormCtrl: [''],
      addressFormCtrl: [''],
      guestNames: [''],
    });
  }

  /* hostEventToggle() {
    var x = document.getElementById('eventForm');
    var y = document.getElementById('eventFormButton');
    if (x.style.display === 'none') {
      x.style.display = 'block';
      y.style.display = 'block';
    } else {
      x.style.display = 'none';
      y.style.display = 'none';
    }
  }
*/
  logout() {
    this.authService.doLogout().then(
      (res) => {
        this.location.back();
      },
      (error) => {
        console.log('Logout error', error);
      }
    );
  }

  resetFields() {
    this.formGroup = this._formBuilder.group({
      typeFormCtrl: new FormControl('', Validators.required),
      dateFormCtrl: new FormControl('', Validators.required),
      capacityFormCtrl: new FormControl('', Validators.required),
      addressFormCtrl: new FormControl('', Validators.required),
    });
  }

  onSubmit(value) {
    this.firebaseService.createEvent(value).then((res) => {
      this.resetFields();
      this.router.navigate(['events']);
    });
  }
}
