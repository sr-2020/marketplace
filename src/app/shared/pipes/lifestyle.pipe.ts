import { Pipe, PipeTransform } from '@angular/core'
import { Lifestyle } from '@type'

export const LIFESTYLE: Map<string, string> = new Map([
  ['Wood', 'Дерево'],
  ['Bronze', 'Бронза'],
  ['Silver', 'Серебро'],
  ['Gold', 'Золото'],
  ['Platinum', 'Платина'],
  ['Iridium', 'Иридиум']
])

@Pipe({
  name: 'lifestyle'
})
export class LifestylePipe implements PipeTransform {
  transform(value: Lifestyle | string): string {
    if (!value) {
      return ''
    }

    if (typeof value === 'string') {
      return LIFESTYLE.get(value) ?? 'unknown'
    }

    return LIFESTYLE.get(value.name) ?? 'unknown'
  }
}
