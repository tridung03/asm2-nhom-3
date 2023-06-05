import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/category/category.service';
import { category } from 'src/app/interface/category';
import { Iproduct } from 'src/app/interface/product';
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
  categories: category[] = [];

  constructor ( private router: ActivatedRoute, private route: Router, private productSevice: ProductService, private categorys: CategoryService
  )
  {

  }
  ngOnInit (): void
  {
    this.getAllCategory();
    this.getOneProduct()

  }
  getOneProduct ()
  {
    this.router.params.subscribe( ( params ) =>
    {
      const productId = params[ 'id' ]
      if ( productId )
      {
        this.productSevice.detailProduct( productId ).subscribe( ( data ) =>
        {
          this.product = data
        } )
      } else
      {
        console.log( "invailed product id" );
      }
    } )
  }

  onhandleEdit (): void
  {
    this.productSevice.editProduct( this.product ).subscribe( () =>
    {
      this.route.navigateByUrl( "/admin" )
    } )
  }
  getAllCategory ()
  {
    this.categorys.getAllCategory().subscribe( ( data ) =>
    {
      this.categories = data
    } )
  }
}
