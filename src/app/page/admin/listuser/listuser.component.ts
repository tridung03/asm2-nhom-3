import { Component } from '@angular/core';
import { User } from 'src/app/common/user';
import { UserService } from 'src/app/seviceuser/user.service';

@Component( {
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: [ './listuser.component.scss' ]
} )
export class ListuserComponent
{
  product!: User[]
  constructor ( private auth: UserService )
  {
    this.auth.getAll().subscribe( data =>
    {
      console.log( this.product = data );

    } )
  }
  onhandleRemove ( id: number )
  {
    this.auth.remove( id ).subscribe( () =>
    {
      this.product = this.product.filter( product => product.id !== id )
    } )
  }
}
