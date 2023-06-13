import { Component } from '@angular/core';
import { Iproduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/service/product.service';

@Component( {
  selector: 'app-dashbroad',
  templateUrl: './dashbroad.component.html',
  styleUrls: [ './dashbroad.component.scss' ]
} )
export class DashbroadComponent
{
  product!: Iproduct[]
  constructor ( private productService: ProductService )
  {
    this.productService.getProduct().subscribe( data =>
    {
      console.log( this.product = data );

    } )
  }
  onhandleRemove ( id: number )
  {
    this.productService.deleteProduct( id ).subscribe( () =>
    {
      this.product = this.product.filter( product => product.id !== id )
    } )
  }
}
