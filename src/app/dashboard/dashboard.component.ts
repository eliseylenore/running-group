import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service'
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { SignInComponent } from '../sign-in/sign-in.component';
import { DialogService } from "ng2-bootstrap-modal";
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [ AuthenticationService ]
})
export class DashboardComponent implements OnInit {

  user;
  name;
  signedIn;

  constructor(
    public af: AngularFire,
    private authenticationService: AuthenticationService,
    private dialogService: DialogService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.af.auth.subscribe(auth => {
      if(auth) {
        this.signedIn = true;
        this.name = auth;
      }
    });
  }

  logout() {
    this.af.auth.logout();
    console.log('logged out');
    this.signedIn = false;
    this.router.navigateByUrl('/login');
  }

  openAuthentication() {
    let disposable = this.dialogService.addDialog(SignInComponent, {
      title: 'Sign In',
      message: 'Sign In'}).subscribe((isConfirmed)=>{
                    //We get dialog result
                    if(isConfirmed) {
                        alert('accepted');
                    }
                    else {
                        alert('You were not logged in. Please try again.');
                    }
                });
  }

}
