import { Pipe, PipeTransform } from '@angular/core';
import { IFood } from '../i-food';

@Pipe({
  name: 'foodFilter'
})
export class FoodFilterPipe implements PipeTransform {

  transform(value: IFood[], name: string): any {
    let filtered: IFood[] = value;

    if (name) {
      const lowerName = name.toLowerCase();
      filtered = filtered.filter(food => {
        return food.Name.toLowerCase().includes(lowerName);
      });
    }

    return filtered;
  }

}