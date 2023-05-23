import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { User } from 'src/app/common/product';
import { ProductService } from 'src/app/service/product.service';
import * as bcrypt from 'bcryptjs';
import { Router } from '@angular/router';

@Component( {
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: [ './singup.component.scss' ]
} )
export class SingupComponent
{

  constructor ( private fb: FormBuilder, private router: Router, private productService: ProductService )
  {

  }
  singupForm = this.fb.group( {
    user: [ "", [ Validators.required, Validators.email ] ],
    lastname: [ "", [ Validators.required, Validators.pattern( "[a-zA-Z]+$" ) ] ],
    firstname: [ "", [ Validators.required, Validators.pattern( "[a-zA-Z]+$" ) ] ],
    password: [ "", [ Validators.required, Validators.minLength( 5 ) ] ],
    comfirmPassword: [ "", [ Validators.required, Validators.minLength( 5 ) ] ],

  } );


  singupUser (): void
  {
    console.warn( this.singupForm.value );
    const user: User = {
      user: this.singupForm.value.user || "",
      lastname: this.singupForm.value.lastname || "",
      firstname: this.singupForm.value.firstname || "",
      password: this.singupForm.value.password || "",
      comfirmPassword: this.singupForm.value.comfirmPassword || ""
    };

    //ma hoa mat khau 
    const hasspassword = bcrypt.hashSync( user.password, 10 )
    //gan mat khau dc ma hoa cho user
    user.password = hasspassword
    this.productService.singup( user ).subscribe( ( result ) =>
    {
      console.log( result );


    } )

  }
  get user ()
  {
    return this.singupForm.get( "user" )
  }
  get password ()
  {
    return this.singupForm.get( "password" )
  }
  get lastname ()
  {
    return this.singupForm.get( "lastname" )
  }
  get firstname ()
  {
    return this.singupForm.get( "firstname" )
  }
  get comfirmPassword ()
  {
    return this.singupForm.get( "comfirmPassword" )
  }
}
