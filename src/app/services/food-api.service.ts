import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../../environments/environment';

import 'rxjs/add/operator/map';

@Injectable()
export class FoodApiService {

  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  getFoodList() {
    return this.http.get(this.getUrl('/food'))
      .map(resp => resp.json().result);
  }

  private getUrl(requestUrl): string {
    return environment.serviceUrl + requestUrl;
  }

}
