import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component( {
  selector: 'app-giohangproduct',
  templateUrl: './giohangproduct.component.html',
  styleUrls: [ './giohangproduct.component.scss' ]
} )
export class GiohangproductComponent implements OnInit
{
  cartItems: any[] = [];

  constructor ( private cartService: ProductService ) { }

  ngOnInit ()
  {
    // Lấy thông tin giỏ hàng từ service và gán cho cartItems
    // this.cartItems = this.cartService.getCartItems();
  }

  calculateTotalPrice (): number
  {
    let totalPrice = 0;
    for ( const item of this.cartItems )
    {
      totalPrice += item.quantity * item.price;
    }
    return totalPrice;
  }

}
