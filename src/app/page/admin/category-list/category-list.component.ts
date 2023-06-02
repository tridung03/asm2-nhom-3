import { Component } from '@angular/core';
import { CategoryService } from 'src/app/category/category.service';
import { category } from 'src/app/common/category';

@Component( {
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: [ './category-list.component.scss' ]
} )
export class CategoryListComponent
{
  product!: category[]
  constructor ( private productService: CategoryService )
  {
    this.productService.getAllCategory().subscribe( data =>
    {
      console.log( this.product = data );

    } )
  }
  onhandleRemove ( id: number )
  {
    this.productService.DeleteCategory( id ).subscribe( () =>
    {
      this.product = this.product.filter( product => product.id !== id )
    } )
  }


}
