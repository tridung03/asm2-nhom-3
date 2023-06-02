import { Component } from '@angular/core';
import { CategoryService } from 'src/app/category/category.service';
import { category } from 'src/app/common/category';
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
  category!: category[]
  constructor ( private productService: ProductService, private categorys: CategoryService )
  {
    this.productService.getProduct().subscribe( data =>
    {
      console.log( this.product = data );

    } ),
      this.categorys.getAllCategory().subscribe( data =>
        console.log( this.category = data )
      )
  }
}
