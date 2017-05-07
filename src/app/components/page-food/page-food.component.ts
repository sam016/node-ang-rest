import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FoodApiService } from 'app/services/food-api.service';

import { IFood } from '../../i-food';

@Component({
  selector: 'app-page-food',
  templateUrl: './page-food.component.html',
  styleUrls: ['./page-food.component.scss'],
  providers: [FoodApiService]
})
export class PageFoodComponent implements OnInit {

  foods: IFood[];
  filters: IFilter;

  constructor(private titleService: Title, private foodApiService: FoodApiService) {
    this.titleService.setTitle('Foods');
    this.filters = {
      Name: '',
      Type: ''
    };
    this.refresh();
  }

  ngOnInit() { }

  private refresh() {
    this.foodApiService.getFoodList()
      .then(foods => this.foods = foods);
  }

}

interface IFilter {
  Name: string;
  Type: string;
}
