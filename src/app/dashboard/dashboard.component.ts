import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service'
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
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
    public af: AngularFireDatabase,
    private authenticationService: AuthenticationService,
    private dialogService: DialogService,
    private router: Router
  ) {
  }

  ngOnInit() {
    if(this.authenticationService.currentUser) {
      this.router.navigateByUrl('/members');
    }
  }

  logout() {
    firebase.auth().signOut().then(function() {
      this.signedIn = false;
      this.router.navigateByUrl('/login');
      console.log('logged out');
    }).catch(function(error) {
        alert("An error occured: " + error)
      });
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
