import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

import 'rxjs/add/operator/switchMap';

export class User {

  uid: string;
  username: string = "";

  constructor(auth) {
    this.uid = auth.uid;
  }
}

@Injectable()
export class AuthenticationService {
  currentUser: User;
  //user = {};
  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase
  ) {
    //wait for auth data to be emited from Firebase, and then query that data to get the actual username
    this.afAuth.authState.switchMap(auth => {
                  if (auth) {
                    this.currentUser = new User(auth)
                    return this.db.object(`/users/${auth.uid}`)
                  } else return [];
                })
                .subscribe(user => {
                    this.currentUser['username'] = user.username
                })
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.afAuth.auth.signInWithPopup(provider)
      .then(() => console.log('successful auth'))
      .catch(error => console.log(error));
  }

  facebookLogin() {
    const provider = new firebase.auth.FacebookAuthProvider();
    return this.afAuth.auth.signInWithPopup(provider)
      .then(() => console.log('successful auth'))
      .catch(error => console.log(error));
  }

  emailLogin(formData) {
    firebase.auth().signInWithEmailAndPassword(formData.value.email, formData.value.password).catch(function(error) {
      console.log(error);
      this.error = error;
});
  }

  signUp(formData) {
    firebase.auth().createUserWithEmailAndPassword(formData.value.email, formData.value.password).catch(function(error) {
      console.log(error);
      this.error = error;
    });
  }

  get hasUsername() {
    return this.currentUser.username ? true : false;
  }

  checkUsername(username: string) {
    username = username.toLowerCase();
    return this.db.object('username/${username}');
  }

  updateUsername(username: string) {
    let data = {}
    data[username] = this.currentUser.uid;

    this.db.object(`/users/${this.currentUser.uid}`).update({"username": username})
  }

  getUser() {
    return this.currentUser.username;
  }
}
