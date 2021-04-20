import { Pipe, PipeTransform } from '@angular/core'
import { Organisation } from '@type'
import { checkOrganisationType } from '../../util/helpers'

@Pipe({
  name: 'organisation'
})
export class OrganisationPipe implements PipeTransform {

  transform(value: Organisation): string {
    switch (checkOrganisationType(value)) {
      case 'shop':
        return 'Магазин'
      case 'corporation':
        return 'Корпорация'
      default:
        return 'Неопознанный тип'
    }
  }

}
