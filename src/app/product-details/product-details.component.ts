import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  product: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsservice: ProductsService
  ) {
    this.activatedRoute.params.subscribe(
      (data: any) => {
    

      this.productsservice.getproduct(data.id).subscribe(
        (data: any) => {
        this.product = data.data;
      });
    });
  }
}
