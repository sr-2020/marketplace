import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lifestyle'
})
export class LifestylePipe implements PipeTransform {

  transform(value: string): string {

    const lifestyles = new Map([
      ['Wood', 'Дерево'],
      ['Bronze', 'Бронза'],
      ['Silver', 'Серебро'],
      ['Gold', 'Золото'],
      ['Platinum', 'Платина'],
      ['Iridium', 'Иридиум'],
    ]);


    return lifestyles.get(value) ?? 'unknown';
  }

}
