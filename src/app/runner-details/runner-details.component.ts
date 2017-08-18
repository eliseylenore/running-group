import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { RunnerService } from '../runner.service';
import { Runner } from '../runner.model';


@Component({
  selector: 'app-runner-details',
  templateUrl: './runner-details.component.html',
  styleUrls: ['./runner-details.component.scss'],
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
    this.runnerService.getRunnerById(this.runnerId).subscribe(dataLastEmittedFromObserver => {
      this.runnerToDisplay = new Runner(
        dataLastEmittedFromObserver.name,
        dataLastEmittedFromObserver.role,
        dataLastEmittedFromObserver.profilePic
      );
      this.runnerToDisplay.daysAttended = dataLastEmittedFromObserver.daysAttended;
    })
  }



}
