import { Pipe, PipeTransform } from '@angular/core';
import { Runner } from './runner.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
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
