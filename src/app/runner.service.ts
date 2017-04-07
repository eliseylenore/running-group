import { Injectable } from '@angular/core';
import { Runner } from './runner.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class RunnerService {
  runners: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.runners = angularFire.database.list('runners');
  }

  getRunners() {
    return this.runners;
  }

}
