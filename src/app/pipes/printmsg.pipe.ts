import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'printmsg'
})
export class PrintmsgPipe implements PipeTransform {

  transform(value:string): unknown {
    return "hello"+value;
  }

}
