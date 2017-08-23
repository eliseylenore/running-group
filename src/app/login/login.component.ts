import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { moveIn, fallIn, moveInLeft } from '../router.animations';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthenticationService],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''}
})
export class LoginComponent implements OnInit {
  usernameText: string;
  usernameAvailable: boolean;

  error: any;
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
        if(authenticationService.currentUser) {
          this.router.navigateByUrl('/members');
        }
    }

    loginFb() {
      this.authenticationService.facebookLogin();
    }

    loginGoogle() {
      this.authenticationService.googleLogin();
    }

    checkUsername() {
      this.authenticationService.checkUsername(this.usernameText).subscribe(username => {
        this.usernameAvailable = !username.$value
      })
    }

    updateUsername() {
      this.authenticationService.updateUsername(this.usernameText);
    }

  ngOnInit() {
    console.log(this.authenticationService.hasUsername)
  }

}
