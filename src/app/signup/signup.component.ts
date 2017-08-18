import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}
})
export class SignupComponent implements OnInit {

  state: string = '';
  error: any;

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
      this.authenticationService.signUp(formData);
    }
  }

  ngOnInit() {
  }

}
