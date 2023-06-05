import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CategoryService } from 'src/app/category/category.service';
import { category } from 'src/app/interface/category';
import { Iproduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/service/product.service';

@Component( {
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: [ './productpage.component.scss' ]
} )
export class ProductpageComponent
{
  products!: Iproduct[];
  categories: category[] = [];
  cateId: any;
  filteredProducts: Iproduct[] = [];

  constructor (
    private productService: ProductService,
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute,
    private route: Router
  )
  {
    this.activatedRoute.queryParams.subscribe( ( params: Params ) =>
    {
      let id = params[ 'id' ];
      console.log( id );
    } );
  }

  ngOnInit ()
  {
    this.getAllProduct();
    this.getAllCategory();

    this.activatedRoute.paramMap.subscribe( params =>
    {
      this.cateId = params.get( 'id' );
      console.log( this.cateId );
      this.filterProductsByCategory();
    } );
    this.getAllCategory();
  }

  getAllProduct ()
  {
    this.productService.getProduct().subscribe( data =>
    {
      this.products = data;
      this.filterProductsByCategory();
    } );
  }

  getAllCategory ()
  {
    this.categoryService.getAllCategory().subscribe( data =>
    {
      this.categories = data;
    } );
  }
  filterProductsByCategory ()
  {
    if ( this.cateId )
    {
      this.filteredProducts = this.products.filter(
        product => product.categoryId === this.cateId
      );
    } else
    {
      this.filteredProducts = this.products;
    }
  }




  onCategoryClick ( categoryId: string )
  {
    this.cateId = categoryId;
    this.filterProductsByCategory();
  }

}
