import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"
import { Iproduct, Login, LoginResponse, User, thanhtoan } from '../common/product';

@Injectable( {
  providedIn: 'root'
} )
export class ProductService
{

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
  singup ( body: User ): Observable<User>
  {
    return this.http.post<User>( "http://localhost:3000/" + "users", body )
  }
  login ( body: Login ): Observable<Login>
  {
    return this.http.post<Login>( "http://localhost:3000/users", body );
  }
  uploadImage ( file: FormData ): Observable<any>
  {
    return this.http.post<any>( 'http://localhost:3000/products', file );
  }
  thanhToan ( body: thanhtoan ): Observable<thanhtoan>
  {
    return this.http.post<thanhtoan>( "http://localhost:3000/cart", body )
  }
}
