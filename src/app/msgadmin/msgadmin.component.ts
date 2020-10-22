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

@Component({
  selector: 'app-msgadmin',
  templateUrl: './msgadmin.component.html',
  styleUrls: ['./msgadmin.component.css']
})
export class MsgadminComponent implements OnInit {

  formGroup: FormGroup;

  constructor(
    public authService: AuthService,
    private router: Router,
    private location: Location,
    private _formBuilder: FormBuilder,
    public firebaseService: FirebaseService
  ) {}

  ngOnInit(): void {
    this.formGroup = this._formBuilder.group({
      nameFormCtrl: ['', Validators.required],
      issueFormCtrl: ['', Validators.required],
      guestNames: [''],
    });
  }

  resetFields() {
    this.formGroup = this._formBuilder.group({
      nameFormCtrl: new FormControl('', Validators.required),
      issueFormCtrl: new FormControl('', Validators.required),
    });
  }

  onSubmit(value) {
    this.firebaseService.msgAdmin(value).then((res) => {
      this.resetFields();
      this.router.navigate(['app-broadcast']);
    });
  }
}