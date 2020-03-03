import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProfileComponent } from './add-profile/add-profile.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  { path: 'add-profile', component: AddProfileComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'auth/signup', component: SignupComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes), 
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule, 
    HttpClientModule],
    exports: [RouterModule],
})
export class AppRoutingModule { }
