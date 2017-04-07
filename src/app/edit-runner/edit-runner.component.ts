import { Component, OnInit, Input } from '@angular/core';
import { Runner } from '../runner.model';
import { RunnerService } from '../runner.service';

@Component({
  selector: 'app-edit-runner',
  templateUrl: './edit-runner.component.html',
  styleUrls: ['./edit-runner.component.css']
})
export class EditRunnerComponent implements OnInit {
  @Input() selectedRunner;
  thisDate: Date = new Date();
  todaysDate: string = this.thisDate.getMonth() + "/" + this.thisDate.getMonth() + "/" + this.thisDate.getFullYear();


  constructor(private runnerService: RunnerService) { }

  ngOnInit() {
  }

  beginUpdatingRunner(selectedRunner) {
    this.runnerService.updateRunner(selectedRunner);
  }

  beginDeletingRunner(runnerToDelete) {
    if(confirm("Are you sure you want to delete this runner from the group?")) {
      this.runnerService.deleteRunner(runnerToDelete);
    }
  }

}
