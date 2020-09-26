import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MaterialModule } from './material-module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { Carousel1Component } from './carousel1/carousel1.component';
import { Carousel2Component } from './carousel2/carousel2.component';
import { AuthModule } from './auth/auth.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { AuthGuard } from './services/auth.guard';
import { UserResolver } from './user/user.resolver';
import { UserComponent } from './user/user.component';
import { EventsComponent } from './events/events.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Carousel1Component,
    Carousel2Component,
    UserComponent,
    EventsComponent,
  ],
  imports: [
    MaterialModule,
    AngularFireAuthModule,
    MatFormFieldModule,
    MatButtonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    FormsModule,
    BrowserAnimationsModule,
  ],

  providers: [
    MaterialModule,
    MatFormFieldModule,
    MatButtonModule,
    AuthService,
    UserService,
    UserResolver,
    AuthGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
