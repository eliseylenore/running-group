import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { RunnerDetailsComponent } from './runner-details/runner-details.component';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';
import { ChatComponent } from './chat/chat.component';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MembersComponent } from './members/members.component';
// import { AuthGuard } from './auth.service';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'login-email',
    component: EmailComponent
  },
  {
    path: 'members',
    component: MembersComponent
  },
  {
    path: 'runners/:id',
    component: RunnerDetailsComponent
  }, {
    path: 'admin',
    component: AdminComponent
  }, {
    path: 'about',
    component: AboutComponent
  }, {
    path: 'chat',
    component: ChatComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
