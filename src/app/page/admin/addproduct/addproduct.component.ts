import { Component } from '@angular/core';
import { Iproduct } from 'src/app/common/product';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { category } from 'src/app/common/category';
import { CategoryService } from 'src/app/category/category.service';

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
    categoryId: 0,
    img: "",
  }
  categories!: category[]


  constructor ( private router: Router,
    private productSevice: ProductService, private category: CategoryService )
  {

  }
  getAllCategory ()
  {
    this.category.getAllCategory().subscribe( ( data ) =>
    {
      this.categories = data
    } )
  }
  onhandleadd (): void
  {
    this.productSevice.addProduct( this.product ).subscribe( () =>
    {
      this.router.navigateByUrl( "/admin" )
    } )
  }
}
