import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/common/user';
import { UserService } from 'src/app/seviceuser/user.service';

@Component( {
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: [ './singup.component.scss' ]
} )
export class SingupComponent
{
  users!: User
  singupForm: FormGroup
  constructor ( private fb: FormBuilder, private router: Router, private productService: UserService )
  {
    this.singupForm = this.fb.group( {
      email: [ "", [ Validators.required, Validators.email ] ],
      name: [ "", [ Validators.required, Validators.pattern( "[a-zA-Z]+$" ) ] ],
      password: [ "", [ Validators.required, Validators.minLength( 5 ) ] ],
      confirmPassword: [ "", [ Validators.required, Validators.minLength( 5 ) ] ],

    }, { Validators: this.checkpassword } );
  }

  checkpassword ( form: FormGroup )
  {
    const password = form.get( "password" )?.value;
    const confirmPassword = form.get( "confirmPassword" )?.value
    if ( password === confirmPassword ) return null;

    return { notMatch: true }
  }

  singupUser (): void
  {
    console.warn( this.singupForm.value );
    const user: User = {
      role: this.singupForm.value.role || "",

      name: this.singupForm.value.name || "",
      email: this.singupForm.value.email || "",
      password: this.singupForm.value.password || "",
      confirmPassword: this.singupForm.value.confirmPassword || ""
    };

    this.productService.singup( user ).subscribe( ( result ) =>
    {
      console.log( result );


    } )

  }
  get name ()
  {
    return this.singupForm.get( "name" )
  }
  get password ()
  {
    return this.singupForm.get( "password" )
  }

  get email ()
  {
    return this.singupForm.get( "email" )
  }
  get confirmPassword ()
  {
    return this.singupForm.get( "confirmPassword" )
  }
}
