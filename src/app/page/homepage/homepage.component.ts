import { Component } from '@angular/core';
import { CategoryService } from 'src/app/category/category.service';
import { category } from 'src/app/interface/category';
import { Iproduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/service/product.service';

@Component( {
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: [ './homepage.component.scss' ]
} )
export class HomepageComponent
{
  product: Iproduct[] = [];
  searchName: string = '';
  category!: category[];

  constructor ( private productService: ProductService, private categoryService: CategoryService )
  {
    this.productService.getProduct().subscribe( data =>
    {
      this.product = data;
    } );

    this.categoryService.getAllCategory().subscribe( data =>
    {
      this.category = data;
    } );
  }

  search ()
  {
    if ( this.searchName.trim() !== '' )
    {
      const keyword = this.searchName.toLowerCase();
      this.productService.getProduct().subscribe( data =>
      {
        this.product = data.filter( item => item.name.toLowerCase().includes( keyword ) );
      } );
    } else
    {
      this.productService.getProduct().subscribe( data =>
      {
        this.product = data;
      } );
    }
  }
}
