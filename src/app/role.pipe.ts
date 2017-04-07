import { Pipe, PipeTransform } from '@angular/core';
import { Runner } from './runner.model';

@Pipe({

})

export class RolePipe implements PipeTranform {
  transform(input: Runner[]) {
    var output: Runner[] = [];
    for (var i = 0; i < input.length; i++) {
      if(input[i].role === "Leader") {
        output.push(input[i])
      }
    }
    return input;
  }
}
