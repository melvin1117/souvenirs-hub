import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'characterCount'
})
export class CharacterCountPipe implements PipeTransform {

  transform(text: string, maxCharLength = 500): unknown {
    if (!text) {
      return maxCharLength;
    }
    return (maxCharLength - text.length);
  }

}
