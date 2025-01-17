import { Component, OnInit } from '@angular/core';
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
  carts: any = this.productService.getCart();

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
  ngOnInit (): void
  {
  }

  onAddcart ( product: any )
  {
    let index = this.carts.findIndex( ( item: any ) =>
    {
      return item.id == product.id
    } )
    if ( index >= 0 )
    {
      this.carts[ index ].quantity += 1;

    } else
    {
      let cartItems: any = {
        id: product.id,
        name: product.name,
        img: product.img,

        price: product.price ? product.price : product.price,
        quantity: 1,
        subtotal: function ()
        {
          return this.price * this.quantity;
        }

      }
      this.carts.push( cartItems )
    }
    //luu vao storage 
    let cartJson = JSON.stringify( this.carts )
    sessionStorage.setItem( "cart", cartJson )



  }

}
