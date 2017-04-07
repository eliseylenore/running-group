import { Component, OnInit } from '@angular/core';
import { RunnerService } from '../runner.service';

@Component({
  selector: 'app-runners-list',
  templateUrl: './runners-list.component.html',
  styleUrls: ['./runners-list.component.css'],
  providers: [RunnerService]
})
export class RunnersListComponent implements OnInit {
  runners: Runner[];

  constructor(private runnerService: RunnerService) { }

  ngOnInit() {
    this.runners = this.runnerService.getRunners();
  }

}
