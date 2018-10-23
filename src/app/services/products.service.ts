import { Http } from '@angular/http';
import { DataService } from './data.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductsService extends DataService {

  constructor(http: Http) {
    super('http://localhost/laravel_tokenizer/public/api/product', http);
  }

}
