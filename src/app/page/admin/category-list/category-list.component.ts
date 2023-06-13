import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { CategoryService } from 'src/app/category/category.service';
import { category } from 'src/app/interface/category';

@Component( {
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: [ './category-list.component.scss' ]
} )
export class CategoryListComponent
{

  product!: category[]
  constructor ( private category: CategoryService )
  {
    this.category.getAllCategory().subscribe( data =>
    {
      this.product = data
    } )
  }
  onhandleRemove ( id: number )
  {
    this.category.DeleteCategory( id ).subscribe( ( data ) =>
    {
      this.product = this.product.filter( product => product.id != id )
    } )

  }



}
