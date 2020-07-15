import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lifestyle'
})
export class LifestylePipe implements PipeTransform {

  transform(value: number): string {
    const lifestyles = [
      'дерево', 'бронза', 'серебро', 'золото', 'платина', 'ирридиум'
    ];
    return lifestyles[value] ?? 'unknown lifestyle';
  }

}
