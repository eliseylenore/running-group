import { Injectable } from '@angular/core';
import { Runner } from './runner.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class RunnerService {
  runners: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFireDatabase) {
    this.runners = angularFire.list('runners');
  }

  getRunners() {
    return this.runners;
  }

  getRunnerById(runnerId: string) {
    return this.angularFire.object('runners/' + runnerId)
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

  deleteRunner(localRunnerToDelete) {
    var runnerEntryInFirebase = this.getRunnerById(localRunnerToDelete.$key);
    runnerEntryInFirebase.remove();
  }

  attendedClass(localRunnerToMarkInAttendance) {
    var runnerEntryInFirebase = this.getRunnerById(localRunnerToMarkInAttendance.$key);
    runnerEntryInFirebase.update({
      daysAttended: localRunnerToMarkInAttendance.daysAttended
    });
  }
}
