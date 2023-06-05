import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/service/product.service';
@Component( {
  selector: 'app-detaiproduct',
  templateUrl: './detaiproduct.component.html',
  styleUrls: [ './detaiproduct.component.scss' ]
} )
export class DetaiproductComponent
{
  product!: Iproduct
  constructor ( private router: ActivatedRoute,
    private productService: ProductService )
  {
    this.router.paramMap.subscribe( ( params =>
    {
      const id = Number( params.get( "id" ) );
      this.productService.detailProduct( id ).subscribe( data =>
      {
        this.product = data;
      }, error => console.log( error.message )
      )
    } ) )
  }

}
