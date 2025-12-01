import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProductComponent } from './product/product.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AdmiComponent } from './admi/admi.component';
import { AuthGuard } from './auth.guard';
import { ButtonComponent } from './button/button.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'product',component:ProductComponent ,canActivate:[AuthGuard]},
  {path:'newproduct',component:NewProductComponent,canActivate:[AuthGuard]},
  {path:'editproduct/:id',component:NewProductComponent,canActivate:[AuthGuard]},

  {path:'productdetails/:id',component:ProductDetailsComponent,canActivate:[AuthGuard]},
  {path:'admin',component:AdmiComponent,canActivate:[AuthGuard]},
  {path:'button',component:ButtonComponent},
  {path:"",component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
