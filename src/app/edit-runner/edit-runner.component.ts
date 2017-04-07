import { Component, OnInit, Input } from '@angular/core';
import { Runner } from '../runner.model';

@Component({
  selector: 'app-edit-runner',
  templateUrl: './edit-runner.component.html',
  styleUrls: ['./edit-runner.component.css']
})
export class EditRunnerComponent implements OnInit {
  @Input() selectedRunner;

  constructor() { }

  ngOnInit() {
  }

}
