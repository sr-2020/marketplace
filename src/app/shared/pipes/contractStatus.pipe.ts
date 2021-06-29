import { Pipe, PipeTransform } from '@angular/core'


@Pipe({
  name: 'contract',
})
export class ContractStatusPipe implements PipeTransform {
  transform(value: string): unknown {
    return ''
  }
}
