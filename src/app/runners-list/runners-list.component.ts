import { Component, OnInit } from '@angular/core';
import { RunnerService } from '../runner.service';
import { Runner } from '../runner.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-runners-list',
  templateUrl: './runners-list.component.html',
  styleUrls: ['./runners-list.component.css'],
  providers: [RunnerService]
})

export class RunnersListComponent implements OnInit {
  runners: Runner[];
  currentRoute: string = this.router.url;

  constructor(private runnerService: RunnerService, private router: Router) { }

  ngOnInit() {
    this.runnerService.getRunners().subscribe(dataLastEmittedFromObserver => {
      this.runners = dataLastEmittedFromObserver;

      let thisComponent = this;
      this.runners.forEach((runner) => {
        runner = new Runner(
          runner.name,
          runner.role,
          runner.profilePic
        )
      });
    })
    console.log(this.runners);

  }

  goToDetailsPage(clickedRunner) {
    this.router.navigate(['runners', clickedRunner.$key])
  }

}
