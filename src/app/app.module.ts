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
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import { AuthModule } from './auth/auth.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { AuthGuard } from './services/auth.guard';
import { UserResolver } from './user/user.resolver';
import { UserComponent } from './user/user.component';
import { EventsComponent } from './events/events.component';
import { AboutComponent } from './about/about.component';
import { ChatComponent } from './chat/chat.component';
import { MembershipComponent } from './membership/membership.component';
import { ShopComponent } from './shop/shop.component';
import { MsgadminComponent } from './msgadmin/msgadmin.component';
import { BroadcastComponent } from './broadcast/broadcast.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    EventsComponent,
    AboutComponent,
    ChatComponent,
    MembershipComponent,
    ShopComponent,
    MsgadminComponent,
    BroadcastComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
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
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far, fab);
  }
}
