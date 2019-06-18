import { IndexComponent } from './home/index/index.component';
import { AddrentalComponent } from './home/addrental/addrental.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { RentalsComponent } from './home/rentals/rentals.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './service/auth-guard.service';


const routes: Routes = [
  {path:'allproperties' , component:RentalsComponent},
  {path:'addproperty' , component:AddrentalComponent},
  {path:'home' , component:HomeComponent, canActivate:[AuthGuardService]},
  {path:'index' , component:IndexComponent},
  {path:'' , component:IndexComponent},
  {path:'auth' , component:AuthComponent},
  {path:'test/:id' , component:SignupComponent},
  {path:'auth' , component:AuthComponent,children:[
    {path:'signin' , component:SigninComponent},
    {path:'signup' , component:SignupComponent}
  ]},
  {path:'**' , component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
