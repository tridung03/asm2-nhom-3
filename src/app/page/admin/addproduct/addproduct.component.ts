import { Component } from '@angular/core';
import { Iproduct } from 'src/app/common/product';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component( {
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: [ './addproduct.component.scss' ]
} )
export class AddproductComponent
{

  product: Iproduct = {
    id: 0,
    price: 0,
    name: "",
    chitiet: "",
    img: "",
  }


  constructor ( private router: Router,
    private productSevice: ProductService )
  {

  }
  onhandleadd (): void
  {
    this.productSevice.addProduct( this.product ).subscribe( () =>
    {
      this.router.navigateByUrl( "/admin" )
    } )
  }
}
