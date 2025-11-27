import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }
  login(user:any){
    return this.httpClient.post("https://shop-ease-mit.vercel.app/api/auth/login",user);
  }
  newregis(user: any) {
  return this.httpClient.post("https://shop-ease-mit.vercel.app/api/auth/signup", user);
}


}
