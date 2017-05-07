import { Pipe, PipeTransform } from '@angular/core';
import { IFood } from '../i-food';

@Pipe({
  name: 'foodFilter'
})
export class FoodFilterPipe implements PipeTransform {

  transform(value: IFood[], filter: IFilter, name: string): any {
    let filtered: IFood[] = value;

    if (!Array.isArray(filtered)) {
      return value;
    }

    if (filter.Name) {
      const lowerName = filter.Name.toLowerCase();
      filtered = filtered.filter(food => {
        return food.Name.toLowerCase().includes(lowerName);
      });
    }

    if (filter.Type) {
      const lowerName = filter.Type.toLowerCase();
      filtered = filtered.filter(food => {
        return (food.Type.toLowerCase() === lowerName);
      });
    }

    return filtered;
  }

}

interface IFilter {
  Name: string;
  Type: string;
}
