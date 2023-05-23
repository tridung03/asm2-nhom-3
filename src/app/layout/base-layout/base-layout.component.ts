import { Component } from '@angular/core';
import { Iproduct } from 'src/app/common/product';
import { ProductService } from 'src/app/service/product.service';
import { ActivatedRoute } from '@angular/router';

@Component( {
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: [ './base-layout.component.scss' ]
} )
export class BaseLayoutComponent
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
