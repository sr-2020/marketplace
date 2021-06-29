import { Pipe, PipeTransform } from '@angular/core'

export type ContractType = 'suggested' | 'terminating' | 'approved'

const map = new Map<ContractType, string>([
  ['suggested', 'предложенный'],
  ['terminating', 'расторгаемый'],
  ['approved', 'заключенный'],
])
@Pipe({
  name: 'contract',
})
export class ContractStatusPipe implements PipeTransform {
  transform(value: string): unknown {
    return map.get(value.toLowerCase() as ContractType)
  }
}
