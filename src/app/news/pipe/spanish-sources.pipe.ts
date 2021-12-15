import { Pipe, PipeTransform } from '@angular/core';
import {Source} from "../model/data";

@Pipe({
  name: 'spanishSources'
})
export class SpanishSourcesPipe implements PipeTransform {

  transform(value: Source[], ...args: unknown[]): unknown {
    return [...value.filter((item) => item.language == 'es')];
  }

}
