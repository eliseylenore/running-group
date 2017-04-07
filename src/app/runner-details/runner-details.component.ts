import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { RunnerService } from '../runner.service';
import { Runner } from '../runner.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'app-runner-details',
  templateUrl: './runner-details.component.html',
  styleUrls: ['./runner-details.component.css'],
  providers: [RunnerService]
})

export class RunnerDetailsComponent implements OnInit {
  runnerId: string;
  runnerToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private runnerService: RunnerService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.runnerId = urlParameters['id'];
    });
    this.runnerToDisplay = this.runnerService.getRunnerById(this.runnerId);
  }

}
