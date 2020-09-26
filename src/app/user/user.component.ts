import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from '../services/user.service';
import { FirebaseUserModel } from '../services/user.model';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  events: Event[] = [
    { value: 'car-meet', viewValue: 'Car meet' },
    { value: 'track-day', viewValue: 'Track day' },
    { value: 'drag-event', viewValue: 'Drag races' },
    { value: 'car-show', viewValue: 'Car show' },
    { value: 'charity-auction', viewValue: 'Charity auction' },
    { value: 'night-ride', viewValue: 'Night ride' },
  ];

  minDate: Date;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;

  user: FirebaseUserModel = new FirebaseUserModel();
  profileForm: FormGroup;

  constructor(
    public userService: UserService,
    public authService: AuthService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    private _formBuilder: FormBuilder
  ) {
    this.minDate = new Date();
  }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: [''],
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required],
    });

    this.route.data.subscribe((routeData) => {
      let data = routeData['data'];
      if (data) {
        this.user = data;
        this.createForm(this.user.name);
      }
    });
  }

  createForm(name) {
    this.profileForm = this.fb.group({
      name: [name, Validators.required],
    });
  }

  save(value) {
    this.userService.updateCurrentUser(value).then(
      (res) => {
        console.log(res);
      },
      (err) => console.log(err)
    );
  }

  hostEventToggle() {
    var x = document.getElementById('eventStepper');
    if (x.style.display === 'none') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    }
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
}
