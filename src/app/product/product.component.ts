import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products: any = [];
   term:string='';
  constructor(private productsservice: ProductsService,private router:Router) {
    productsservice.getproducts().subscribe(
      (data: any) => {
        this.products = data.data;

      },
      (err: any) => {
        alert('internal server error');
      }
    )
  }
  filterproducts(){
    this.productsservice.filterproducts(this.term).subscribe(
      (data:any)=>{
        this.products=data.data;
      },
      (err:any)=>{
        alert('internal server error');
      }
    )
  }
  sortOption: string = "";

sortproducts() {
  if (this.sortOption === "low-high") {
    this.productsservice.sortproducts("price", "asc").subscribe((data: any) => {
      this.products = data.data;
    });
  }

  else if (this.sortOption === "high-low") {
    this.productsservice.sortproducts("price", "desc").subscribe((data: any) => {
      this.products = data.data;
    });
  }

  else if (this.sortOption === "a-z") {
    this.productsservice.sortproducts("name", "asc").subscribe((data: any) => {
      this.products = data.data;
    });
  }

  else if (this.sortOption === "z-a") {
    this.productsservice.sortproducts("name", "desc").subscribe((data: any) => {
      this.products = data.data;
    });
  }

  else if (this.sortOption === "recent") {
    this.productsservice.sortproducts("createdAt", "desc").subscribe((data: any) => {
      this.products = data.data;
    });
  }
}
limit: number = 10;  
page: number = 1;

limitproducts() {
  this.productsservice.limitproducts(this.limit, this.page).subscribe(
    (data: any) => {
      this.products = data.data;
      
    }
  );
}
logout(){
  localStorage.removeItem("token");
  this.router.navigateByUrl('/login');
}



}
