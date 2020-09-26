import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthGuard } from './services/auth.guard';
import { UserComponent } from './user/user.component';
import { UserResolver } from './user/user.resolver';
import { EventsComponent } from './events/events.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '', redirectTo: 'events' },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
  { path: 'user', component: UserComponent, resolve: { data: UserResolver } },
  { path: 'events', component: EventsComponent },
];
