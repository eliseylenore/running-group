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
  runners: FirebaseListObservable<any[]>;

  constructor(private runnerService: RunnerService, private router: Router) { }

  ngOnInit() {
    this.runners = this.runnerService.getRunners();
  }

  goToDetailsPage(clickedRunner) {
    this.router.navigate(['runners', clickedRunner.$key])
  }

}
