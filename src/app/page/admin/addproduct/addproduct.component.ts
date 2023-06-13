import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/interface/product';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { CategoryService } from 'src/app/category/category.service';
import { category } from 'src/app/interface/category';

@Component( {
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: [ './addproduct.component.scss' ]
} )
export class AddproductComponent implements OnInit
{
  product: Iproduct = {

    price: 0,
    name: "",
    chitiet: "",
    categoryId: 0,
    img: "",
  };
  categories: category[] = [];

  constructor (
    private router: Router,
    private productService: ProductService,
    private categoryService: CategoryService
  ) { }

  ngOnInit (): void
  {
    this.getAllCategory();
  }

  getAllCategory ()
  {
    this.categoryService.getAllCategory().subscribe( ( data ) =>
    {
      this.categories = data;
    } );
  }

  onhandleadd ()
  {
    this.productService.addProduct( this.product ).subscribe( () =>
    {
      this.router.navigateByUrl( "/admin" );
    } );
  }
}
