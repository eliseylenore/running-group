// import { CanActivate, Router } from '@angular/router';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Rx';
// import { AngularFireAuth } from 'angularfire2/auth';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/take';
//
// @Injectable()
// export class AuthGuard implements CanActivate {
//
//   constructor(
//     private afAuth: AngularFireAuth,
//     private router: Router) {}
//
//   canActivate(): Observable<boolean> {
//     return Observable.from(this.afAuth)
//     .take(1)
//     .map(state => !!state)
//     .do(authenticated => {
//       if(!authenticated) this.router.navigate([ '/login' ]);
//     })
//   }
// }
