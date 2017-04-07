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

  getRunnerById(runnerId: string) {
    return this.angularFire.database.object('runners/' + runnerId)
  }

  addRunner(newRunner: Runner) {
    this.runners.push(newRunner);
  }

  updateRunner(localUpdatedRunner) {
    var runnerEntryInFirebase = this.getRunnerById(localUpdatedRunner.$key);
    runnerEntryInFirebase.update({
      name: localUpdatedRunner.name,
      role: localUpdatedRunner.role,
      profilePic: localUpdatedRunner.profilePic
    });
  }

}
