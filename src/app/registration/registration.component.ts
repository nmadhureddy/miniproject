import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registrationForm: FormGroup = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    mobile: new FormControl(),
    password: new FormControl(),
    confirmPassword: new FormControl(),
  })
  constructor(private authservice: AuthService,private router:Router) { }
  submit() {
    console.log(this.registrationForm.value);
    this.authservice.newregis(this.registrationForm.value).subscribe(
      (data: any) => {
        alert("created sucesfully");
        this.router.navigateByUrl("/login");
      },
      (err:any)=>{
        alert(err.err?.message);
      }
    )
  }

}
