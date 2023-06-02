import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CategoryService } from 'src/app/category/category.service';
import { Iproduct } from 'src/app/common/product';
import { ProductService } from 'src/app/service/product.service';

@Component( {
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: [ './productpage.component.scss' ]
} )
export class ProductpageComponent
{
  products!: Iproduct[]
  categories: any = []
  cateId: any;
  filteredProducts: Iproduct[] = [];
  constructor (
    private ProductService: ProductService,
    private CategoryService: CategoryService,
    private activatedRoute: ActivatedRoute,
    private route: Router

  )
  {
    this.activatedRoute.queryParams.subscribe( ( params: Params ) =>
    {
      let id = params[ 'id' ];
      console.log( id );
    } )
  }

  ngOnInit ()
  {
    this.getAllProduct();
    this.activatedRoute.paramMap.subscribe( params =>
    {
      this.cateId = params.get( 'id' );
      console.log( this.cateId );
      this.filterProductsByCategory();
    } )
    this.getAllCategory();
  }

  getAllProduct ()
  {
    this.ProductService.getProduct().subscribe( ( data ) =>
    {
      this.products = data;
      this.filterProductsByCategory();
    } )
  }

  getAllCategory ()
  {
    this.CategoryService.getAllCategory().subscribe( ( data ) =>
    {
      this.categories = data
    } )
  }

  filterProductsByCategory ()
  {
    if ( this.cateId )
    {
      this.filteredProducts = this.products.filter( product => product.categoryId === this.cateId )
    }
    else
    {
      this.filteredProducts = this.products;
    }
  }

  onCategoryClick ( categoryId: string )
  {
    this.cateId = categoryId;
    this.route.navigate( [ '/product', categoryId ] );
  }
}
