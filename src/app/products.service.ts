import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient:HttpClient) { }
  getproducts()
  {
    return this.httpClient.get("https://shop-ease-mit.vercel.app/api/products");
  }
  getproduct(id:string)
  {
    return this.httpClient.get("https://shop-ease-mit.vercel.app/api/products/"+id);
  }
  deleteproduct(id:string)
  {
    return this.httpClient.delete("https://shop-ease-mit.vercel.app/api/products/"+id);
  }
  updateproduct(product:any,id:string)
  {
    return this.httpClient.put("https://shop-ease-mit.vercel.app/api/products/"+id,product);
  }
  filterproducts(term:string){
    return this.httpClient.get("https://shop-ease-mit.vercel.app/api/products?filter="+term);
  }
  sortproducts(column:string,order:string){
     return this.httpClient.get("https://shop-ease-mit.vercel.app/api/products?sortBy="+column+"&order="+order);
    
  }
  limitproducts(limit: number, page: number) {
  return this.httpClient.get(
    `https://shop-ease-mit.vercel.app/api/products?limit=${limit}&page=${page}`
  );
}
newproduct(product:any) {
    return this.httpClient.post("https://shop-ease-mit.vercel.app/api/products",product);
  }

}
