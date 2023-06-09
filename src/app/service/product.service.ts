import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"
import { Iproduct, thanhtoan } from '../common/product';
import { Login, LoginResponse, User } from '../common/user';
import { category} from'../common/category'
import { Iproduct, thanhtoan } from '../interface/product';
import { Login, LoginResponse, User } from '../interface/user';

@Injectable( {
  providedIn: 'root'
} )
export class ProductService
{
  private apiUrl = 'http://localhost:3000';

  constructor ( private http: HttpClient )
  { }
  getProduct (): Observable<Iproduct[]>
  {
    return this.http.get<Iproduct[]>( "http://localhost:3000/products" )
  }
  detailProduct ( id: number ): Observable<Iproduct>
  {
    return this.http.get<Iproduct>( `http://localhost:3000/products/${ id }` )
  }
  deleteProduct ( id: number ): Observable<Iproduct>
  {
    return this.http.delete<Iproduct>( `http://localhost:3000/products/${ id }` )
  }
  addProduct ( product: Iproduct ): Observable<Iproduct>
  {
    return this.http.post<Iproduct>( "http://localhost:3000/products", product )
  }
  editProduct ( product: Iproduct ): Observable<Iproduct>
  {
    return this.http.put<Iproduct>( `http://localhost:3000/products/${ product.id }`, product )
  }
  ListProductByCate (): Observable<any>
  {
    return this.http.get( "http://localhost:3000/products" )
  }

  thanhToan ( body: thanhtoan ): Observable<thanhtoan>
  {
    return this.http.post<thanhtoan>( "http://localhost:3000/cart", body )
  }

  addCategory ( category: category ): Observable<category>
  {
    return this.http.post<category>( "http://localhost:3000/category", category )
  getCart ()
  {
    let cartJson = sessionStorage.getItem( "cart" );
    if ( cartJson )
    {
      return JSON.parse( cartJson )
    } else
    {
      return []
    }
  }
  saveCart ( carts: any )
  {
    let cartJson = JSON.stringify( carts )
    sessionStorage.setItem( "cart", cartJson )

  }
  getCartTotalPrice ()
  {
    let carts = this.getCart();
    let total: number = 0;
    carts.forEach( ( item: any ) =>
    {
      total += item.quantity * item.price;
    } );
    return total
  }
  getCartquantity ()
  {
    let carts = this.getCart();
    let total: number = 0;
    carts.forEach( ( item: any ) =>
    {
      total += item.quantity
    } );
    return total
  }
}
