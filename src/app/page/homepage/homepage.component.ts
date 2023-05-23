import { Component } from '@angular/core';
import { Iproduct } from 'src/app/common/product';
import { ProductService } from 'src/app/service/product.service';

@Component( {
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: [ './homepage.component.scss' ]
} )
export class HomepageComponent
{
  product!: Iproduct[]
  constructor ( private productService: ProductService )
  {
    this.productService.getProduct().subscribe( data =>
    {
      console.log( this.product = data );

    } )
  }
}
