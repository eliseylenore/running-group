import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders } from 'angularfire2';

@Injectable()
export class AuthenticationService {
  user = {};
  constructor(
    public af: AngularFire
  ) {
    this.af.auth.subscribe(user => {
      if (user) {
        this.user = user;
      } else {
        //if user is not logged in
        this.user = {};
      }
    })
  }

  getUser() {
    return this.user;
  }
}
