import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatoMoneda',
})
export class FormatoMonedaPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
