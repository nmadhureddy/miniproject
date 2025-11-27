import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admi',
  templateUrl: './admi.component.html',
  styleUrls: ['./admi.component.css']
})
export class AdmiComponent {
  products: any = [];
  
    constructor(private productservice: ProductsService,private router:Router) {
      productservice.getproducts().subscribe(
        (data: any) => {
          this.products = data.data;
  
        },
        (err: any) => {
          alert('internal server error');
        }
      )
    }
    deleteproduct(id:string){
      this.productservice.deleteproduct(id).subscribe(
        (data:any)=>{
          alert('deleted success');
          location.reload();
        },
        (err:any)=>{
          alert('internal server error');
        }
      )

    }
    logout(){
  localStorage.removeItem("token");
  this.router.navigateByUrl('/login');
}


}
