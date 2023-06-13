import { Component } from '@angular/core';
import { Iproduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/service/product.service';

@Component( {
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: [ './admin-layout.component.scss' ]
} )
export class AdminLayoutComponent
{
  searchName: string = '';
  product: Iproduct[] = [];
  constructor ( private auth: ProductService )
  {

  }
  search ()
  {
    if ( this.searchName.trim() !== '' )
    {
      const keyword = this.searchName.toLowerCase();
      this.auth.getProduct().subscribe( data =>
      {
        this.product = data.filter( item => item.name.toLowerCase().includes( keyword ) );
      } );
    } else
    {
      this.auth.getProduct().subscribe( data =>
      {
        this.product = data;
      } );
    }
  }

}
