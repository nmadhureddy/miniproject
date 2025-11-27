import { Component } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm:FormGroup=new FormGroup({
    emailOrMobile:new FormControl(''),
    password:new FormControl(''),
  })
  constructor(private authservice:AuthService,private router:Router){}
  login(){
    console.log(this.loginForm.value);
    this.authservice.login(this.loginForm.value).subscribe(
      (data:any)=>{
        alert("login sucess");
        localStorage.setItem("token",data.accessToken);
        this.router.navigateByUrl("/product");
      },
      (err:any)=>{
        alert('invalid credentials');
      }
    )
  
  
}

}
