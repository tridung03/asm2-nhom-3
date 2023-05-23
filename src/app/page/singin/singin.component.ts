import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from 'src/app/common/product';
import { ProductService } from 'src/app/service/product.service';

@Component( {
  selector: 'app-login',
  template: `
    <h2>Login</h2>
    <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" formControlName="user">
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" formControlName="password">
      </div>
      <button type="submit">Login</button>
    </form>
    <div *ngIf="errorMessage">{{ errorMessage }}</div>
  `,
} )
export class SinginComponent
{
  loginForm: FormGroup;
  errorMessage: string | undefined;

  constructor (
    private formBuilder: FormBuilder,
    private authenticationService: ProductService
  )
  {
    this.loginForm = this.formBuilder.group( {
      user: [ '', Validators.required ],
      password: [ '', Validators.required ]
    } );
  }

  onSubmit ()
  {
    if ( this.loginForm.invalid )
    {
      return;
    }
    const users: Login = {
      user: this.loginForm.value.user || "",
      password: this.loginForm.value.password || ""
    }


    this.authenticationService.login( users )
      .subscribe(
        response =>
        {
          // Xử lý phản hồi từ máy chủ
        },
        error =>
        {
          this.errorMessage = 'An error occurred';
        }
      );
  }
}