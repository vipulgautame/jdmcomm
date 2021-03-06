import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
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
export class UserComponent {
  formDate: Date;
  formGroup: FormGroup;
  errorMessage: string = '';


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
    public authService: AuthService,
    private router: Router,
    private location: Location,
    private _formBuilder: FormBuilder,
    public firebaseService: FirebaseService
  ) {
      this.createForm();
      this.minDate = new Date();
  }

  createForm() {
    this.formGroup = this._formBuilder.group({
      typeFormCtrl: ['', Validators.required],
      dateFormCtrl: ['', Validators.required],
      capacityFormCtrl: ['', Validators.required],
      addressFormCtrl: ['', Validators.required],
      guestNames: [''],
    });
  }

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
    },(err) => {
        console.log(err);
        this.errorMessage = err.message;
      });
  }
}
