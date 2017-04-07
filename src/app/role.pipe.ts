import { Pipe, PipeTransform } from '@angular/core';
import { Runner } from './runner.model';

@Pipe({
  name: "role",
  pure: false
})

export class RolePipe implements PipeTransform {
  transform(input: Runner[]) {
    var output: Runner[] = [];
    for (var i = 0; i < input.length; i++) {
      if(input[i].role === "Leader") {
        output.push(input[i])
      }
    }
    return output;
  }
}
