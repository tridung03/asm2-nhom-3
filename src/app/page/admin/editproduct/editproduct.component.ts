import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/common/product';
import { ProductService } from 'src/app/service/product.service';

@Component( {
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: [ './editproduct.component.scss' ]
} )
export class EditproductComponent implements OnInit
{
  product: Iproduct = {
    id: 0,
    price: 0,
    name: "",
    chitiet: "",
    img: "",
  }

  constructor ( private router: ActivatedRoute, private route: Router, private productSevice: ProductService
  )
  {

  }
  ngOnInit (): void
  {
    const productId = this.router.snapshot.params[ 'id' ];//lay id san pham
    this.productSevice.detailProduct( productId ).subscribe( ( product ) =>
    {
      this.product = product
    } )
  }

  onhandleEdit (): void
  {
    this.productSevice.editProduct( this.product ).subscribe( () =>
    {
      this.route.navigateByUrl( "/admin" )
    } )
  }
}
