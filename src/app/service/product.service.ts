import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"
import { Iproduct, thanhtoan } from '../common/product';
import { Login, LoginResponse, User } from '../common/user';

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
}
