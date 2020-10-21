import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { ChatComponent } from '../chat/chat.component';
import { EventsComponent } from '../events/events.component';
import { MembershipComponent } from '../membership/membership.component';
import { MsgadminComponent } from '../msgadmin/msgadmin.component';
import { AuthGuard } from '../services/auth.guard';
import { ShopComponent } from '../shop/shop.component';
import { UserComponent } from '../user/user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  { path: 'events', component: EventsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'page-user', component: UserComponent },
  { path: 'app-membership', component: MembershipComponent },
  { path: 'app-shop', component: ShopComponent },
  { path: 'app-msgadmin', component: MsgadminComponent },
  { path: '', component: EventsComponent },
  { path: 'chats/:id', component: ChatComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
