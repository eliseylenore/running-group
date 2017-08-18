import { Component, OnInit } from '@angular/core';
import { RunnerService } from '../runner.service';
import { Runner } from '../runner.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-runners-list',
  templateUrl: './runners-list.component.html',
  styleUrls: ['./runners-list.component.scss'],
  providers: [RunnerService]
})

export class RunnersListComponent implements OnInit {
  runners: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private runnerService: RunnerService, private router: Router, private af: AngularFireDatabase) {
    setTimeout(function() {
      this.runners = af.list('runners');
    }, 600);

  }

  ngOnInit() {
    this.runners = this.runnerService.getRunners();
  }

  goToDetailsPage(clickedRunner) {
    this.router.navigate(['runners', clickedRunner.$key])
  }

}
