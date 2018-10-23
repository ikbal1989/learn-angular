import { map } from 'rxjs/operators';
import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products = [];
  total = null;
  current_page;
  first_page_url;
  from;
  last_page;
  last_page_url;
  next_page_url;
  path;
  per_page;
  prev_page_url;
  to;


  constructor(private service: ProductsService) { }

  ngOnInit() {
    this.service.getAll()
      .subscribe(data => {
        this.products = data.results.data;
        this.total = data.results.total;
        this.next_page_url = data.results.next_page_url;
        this.current_page = data.results.current_page;
        this.last_page = data.results.last_page;
        console.log(data);
      });
  }

}
