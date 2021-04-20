import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'filter',
})
export class FilterPipe<T> implements PipeTransform {
  transform(value: T[], key: string, filter: string = ''): unknown {
    return value.filter((el) => el[key].match(new RegExp(filter, 'gi')))
  }
}
