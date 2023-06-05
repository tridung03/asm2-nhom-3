import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/interface/user';
import { UserService } from 'src/app/seviceuser/user.service';

@Component( {
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: [ './singin.component.scss' ]
} )
export class SinginComponent
{
  loginForm: FormGroup;
  errorMessage: string | undefined;

  constructor (
    private formBuilder: FormBuilder, private router: Router,
    private authenticationService: UserService
  )
  {
    this.loginForm = this.formBuilder.group( {
      email: [ '', Validators.required ],
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
      email: this.loginForm.value.email || "",
      password: this.loginForm.value.password || "",

    }


    this.authenticationService.login( users )
      .subscribe(
        response =>
        {
          // Xử lý phản hồi từ máy chủ
          if ( response.accessToken )
          {
            // Lưu trữ token vào Local Storage
            localStorage.setItem( 'accessToken', response.accessToken );

            const isAdmin = response.user.role === "admin";
            if ( isAdmin )
            {
              this.router.navigate( [ '/admin' ] ); // Chuyển hướng đến trang admin
            } else
            {
              this.router.navigate( [ '/' ] ); // Chuyển hướng đến trang chủ
            }
            // Tiến hành chuyển hướng hoặc thực hiện các hành động khác sau khi xác thực thành công
          } else
          {
            this.errorMessage = 'Invalid response from server';
          }
        },
        error =>
        {
          this.errorMessage = 'An error occurred';
        }
      );
  }
  get email ()
  {
    return this.loginForm.get( "email" )
  }
  get password ()
  {
    return this.loginForm.get( "password" )
  }
}