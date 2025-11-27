import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent {
  productForm: FormGroup = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    category: new FormControl(),
    imageUrl: new FormControl(),
    price: new FormControl(),
    discountPrice: new FormControl(),
    rating: new FormControl(),
    stock: new FormControl(),


  })
  id: string = '';
  constructor(private productsservice: ProductsService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(
      (data: any) => {
          this.id = data.id;
          productsservice.getproduct(this.id).subscribe(
            (data: any) => {
              this.productForm.patchValue(data.data);
            }
          )
        }
      
    )
  }
  submit() {
    if (this.id) {
      this.productsservice.updateproduct(this.productForm.value, this.id).subscribe(
        (data: any) => {
          alert('updated sucess');
          this.productForm.reset();
        },
        (err: any) => {
          alert('internal server error');
        }
      )
    }
    else {
      this.productsservice.newproduct(this.productForm.value).subscribe(
        (data: any) => {
          alert('created success');
           this.productForm.reset();
        },
        (err: any) => {
          alert("internal server error");
        }


      )
    }
  }
}
