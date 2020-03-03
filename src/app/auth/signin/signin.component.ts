import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signinForm:FormGroup;
  errorMessage:string;

  constructor(private formBuilder:FormBuilder,
    private authService:AuthService,
    private router:Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.signinForm = this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }
  onSubmit(){
    const email = this.signinForm.get('email').value;
    const password = this.signinForm.get('password').value;

    this.authService.signInUSer(email,password).then(
      ()=>{
        this.router.navigate(['/add-profile']);
      },
      (error)=>{
        this.errorMessage =error;
      }
    )
  }

}