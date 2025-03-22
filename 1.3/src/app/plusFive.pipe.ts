import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'plusFive'
})
export class PlusFivePipe implements PipeTransform {

  transform(value: number, args?: any): any {
    return value + 5;
  }

}
