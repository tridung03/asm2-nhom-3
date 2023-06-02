import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/category/category.service';
import { category } from 'src/app/common/category';

@Component( {
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: [ './addcategory.component.scss' ]
} )
export class AddcategoryComponent
{
  categorys: category = {
    id: 0,

    name: "",


    img: "",
  }



  constructor ( private router: Router,
    private category: CategoryService )
  {

  }

  onhandleadd (): void
  {
    this.category.AddCategory( this.categorys ).subscribe( () =>
    {
      this.router.navigateByUrl( "/admin" )
    } )
  }
}
