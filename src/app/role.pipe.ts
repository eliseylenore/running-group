import { Pipe, PipeTransform } from '@angular/core';
import { Runner } from './runner.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { RunnerService} from './runner.service';

@Pipe({
  name: "role",
  pure: false
})

export class RolePipe implements PipeTransform {

  constructor(private runnerService: RunnerService, private af:AngularFire) {}

  transform(value: any, runnerRole) {
    var filteredRunners= this.af.database.list('runners',{
      query:{
        orderByChild: 'role',
        equalTo: runnerRole
      }
    });
    return filteredRunners;
  }
}
