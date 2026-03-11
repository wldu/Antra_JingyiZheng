import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: false,
})
export class TruncatePipe implements PipeTransform {
  transform(value: string): string {
    if (value.length > 100) {
      return value.slice(0, 100) + '...';
    } else {
      return value;
    }
  }
}
