import { Pipe, PipeTransform } from '@angular/core';
import { Runner } from './runner.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { RunnerService} from './runner.service';

@Pipe({
  name: "role",
  pure: false
})

export class RolePipe implements PipeTransform {
  transform(input: Runner[], desiredRole: string) {
    var output: Runner[] = [];
    for (var i = 0; i < input.length; i++) {
      if (input[i].role == desiredRole) {
        output.push(input[i]);
      }
    }
    return input;
  }
}
