import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterbyprice',
  standalone: false
})
export class FilterbypricePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
