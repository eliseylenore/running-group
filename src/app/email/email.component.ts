import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { moveIn, fallIn } from '../router.animations';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}
})
export class EmailComponent implements OnInit {

  state: string = '';
  error: any;
  usernameText: "";
  usernameAvailable: boolean;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    if(authenticationService.currentUser) {
      this.router.navigateByUrl('/members');
    }
  }

  onSubmit(formData) {
    if(formData.valid) {
      this.authenticationService.emailLogin(formData);
    }
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
  }

}
