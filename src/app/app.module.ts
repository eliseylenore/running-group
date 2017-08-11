import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';
import { RunnersListComponent } from './runners-list/runners-list.component';
import { masterFirebaseConfig } from './api-keys';
import {
  AngularFireModule,
  AuthMethods,
  AuthProviders
} from 'angularfire2';

import { RunnerDetailsComponent } from './runner-details/runner-details.component';
import { AdminComponent } from './admin/admin.component';
import { EditRunnerComponent } from './edit-runner/edit-runner.component';
import { AboutComponent } from './about/about.component';
import { ChatComponent } from './chat/chat.component';
import { NewPostComponent } from './new-post/new-post.component';
import { RolePipe } from './role.pipe';

import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from './auth.service';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { DashboardComponent } from './dashboard/dashboard.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    RunnersListComponent,
    RunnerDetailsComponent,
    AdminComponent,
    EditRunnerComponent,
    AboutComponent,
    ChatComponent,
    NewPostComponent,
    RolePipe,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent,
    DashboardComponent,
  ],
  imports: [
    BootstrapModalModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
