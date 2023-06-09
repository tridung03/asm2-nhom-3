import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/category/category.service';
import { category } from 'src/app/interface/category';

@Component( {
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: [ './edit-category.component.scss' ]
} )
export class EditCategoryComponent
{
  product: category = {
    id: 0,

    name: "",

    img: "",
  }

  constructor ( private router: ActivatedRoute, private route: Router, private productSevice: CategoryService
  )
  {

  }
  ngOnInit (): void
  {
    const productId = this.router.snapshot.params[ 'id' ];//lay id san pham
    this.productSevice.getOneCategory( productId ).subscribe( ( product ) =>
    {
      this.product = product
    } )
  }

  onhandleEdit (): void
  {
    this.productSevice.UpdateCategory( this.product ).subscribe( () =>
    {
      this.route.navigateByUrl( "/admin" )
    } )
  }
}
