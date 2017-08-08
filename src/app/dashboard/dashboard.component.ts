import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service'
import { SignInComponent } from '../sign-in/sign-in.component';
import { DialogService } from "ng2-bootstrap-modal";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [ AuthenticationService ]
})
export class DashboardComponent implements OnInit {

  user;
  constructor(
    private authenticationService: AuthenticationService,
    private dialogService: DialogService
  ) {

  }

  ngOnInit() {
    this.user = this.authenticationService.getUser();
  }

  openAuthentication() {
    let disposable = this.dialogService.addDialog(SignInComponent, {
      title: 'Sign In',
      message: 'Sign In',
    });

  }

}
