import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';
import { RunnersListComponent } from './runners-list/runners-list.component';
import { masterFirebaseConfig } from './api-keys';
import {
  AngularFireModule
} from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

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
// import { AuthGuard } from './auth.service';
import { AuthenticationService } from './authentication.service';
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
    BrowserAnimationsModule,
    BootstrapModalModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [ AuthenticationService, AngularFireAuth, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
