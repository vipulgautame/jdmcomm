import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  exampleForm: FormGroup;
  avatarLink: string =
    'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg';

  validation_messages = {
    name: [{ type: 'required', message: 'Name is required.' }],
    surname: [{ type: 'required', message: 'Surname is required.' }],
    age: [{ type: 'required', message: 'Age is required.' }],
  };

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private router: Router,
    public firebaseService: FirebaseService
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.exampleForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      age: ['', Validators.required],
    });
  }

  resetFields() {
    this.avatarLink =
      'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg';
    this.exampleForm = this.fb.group({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
    });
  }

  onSubmit(value) {
    this.firebaseService.createUser(value, this.avatarLink).then((res) => {
      this.resetFields();
      this.router.navigate(['/home']);
    });
  }
}
