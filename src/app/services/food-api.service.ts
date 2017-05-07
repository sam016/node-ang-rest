import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../../environments/environment';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class FoodApiService {

  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) {
  }

  getFoodList() {
    // let data;

    return this.http.get(this.getUrl('/food'))
      // .map(result => result.json())
      // .subscribe(result => data = result);
      .toPromise()
      .then(res => res.json().result);

    // return data;
  }

  private getUrl(requestUrl): string {
    return environment.serviceUrl + requestUrl;
  }

}
