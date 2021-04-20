import { Pipe, PipeTransform } from '@angular/core'
import { LifestyleType } from '@type'

@Pipe({
  name: 'lifestyle',
})
export class LifestylePipe implements PipeTransform {
  transform(value: LifestyleType): string {
    const lifestyles: Map<LifestyleType, string> = new Map([
      ['Wood', 'Дерево'],
      ['Bronze', 'Бронза'],
      ['Silver', 'Серебро'],
      ['Gold', 'Золото'],
      ['Platinum', 'Платина'],
      ['Iridium', 'Иридиум'],
    ])

    return lifestyles.get(value) ?? 'unknown'
  }
}
