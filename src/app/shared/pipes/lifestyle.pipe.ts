import { Pipe, PipeTransform } from '@angular/core'
import { Lifestyle } from '@type'

@Pipe({
  name: 'lifestyle',
})
export class LifestylePipe implements PipeTransform {
  transform(value: Lifestyle): string {
    const lifestyles: Map<string, string> = new Map([
      ['Wood', 'Дерево'],
      ['Bronze', 'Бронза'],
      ['Silver', 'Серебро'],
      ['Gold', 'Золото'],
      ['Platinum', 'Платина'],
      ['Iridium', 'Иридиум'],
    ])

    return lifestyles.get(value.name) ?? 'unknown'
  }
}
