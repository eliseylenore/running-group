import { Component, OnInit } from '@angular/core';
import { Runner } from '../runner.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { RunnerService } from '../runner.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [RunnerService]
})
export class AdminComponent implements OnInit {

  constructor(private runnerService: RunnerService) { }

  ngOnInit() {
  }

  submitForm(name: string, role: string, profilePic: string) {
    var newRunner: Runner = new Runner(name, role, profilePic);
    this.runnerService.addRunner(newRunner);
  }

}
