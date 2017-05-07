import { TestBed, inject } from '@angular/core/testing';

import { FoodApiService } from './food-api.service';

describe('FoodApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FoodApiService]
    });
  });

  it('should ...', inject([FoodApiService], (service: FoodApiService) => {
    expect(service).toBeTruthy();
  }));
});
