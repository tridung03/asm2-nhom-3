import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component( {
  selector: 'app-giohangproduct',
  templateUrl: './giohangproduct.component.html',
  styleUrls: [ './giohangproduct.component.scss' ]
} )
export class GiohangproductComponent implements OnInit
{
  carts: any = [];
  totalQuanlity: number = this.cartService.getCartquantity()
  Totalprice: number = this.cartService.getCartTotalPrice()

  constructor ( private cartService: ProductService ) { }

  ngOnInit ()
  {
    this.carts = this.cartService.getCart()
    // Lấy thông tin giỏ hàng từ service và gán cho cartItems
    // this.cartItems = this.cartService.getCartItems();
  }

  subtotal ( cart: any )
  {
    return cart.quantity * cart.price;
  }

  updateQuantity ( idx: number, event: any )
  {
    let newQuanlity = event.target.value
    newQuanlity = newQuanlity > 0 ? newQuanlity : 1
    newQuanlity = newQuanlity <= 50 ? newQuanlity : 50

    event.target.value = newQuanlity
    this.carts[ idx ].quantity = newQuanlity
    let cartJson = JSON.stringify( this.carts )
    sessionStorage.setItem( "cart", cartJson )
    this.totalQuanlity = this.cartService.getCartquantity()
    this.Totalprice = this.cartService.getCartTotalPrice()

  }
  remove ( id: number )
  {
    if ( confirm( "bn co muon xoa" ) )
    {
      this.carts.splice( id, 1 );
      this.cartService.saveCart( this.carts )
    }
  }
  clearCart ()
  {
    let _this = this
    if ( confirm( "bn co muon xoa" ) )
    {
      sessionStorage.clear()
      _this.carts = []
    }
  }
}
