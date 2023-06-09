import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { category } from '../interface/category';

@Injectable( {
  providedIn: 'root'
} )
export class CategoryService
{



  constructor ( private http: HttpClient )
  { }
  getAllCategory (): Observable<category[]>
  {
    return this.http.get<category[]>( "http://localhost:3000/category" )
  }
  getOneCategory ( id: number ): Observable<category>
  {
    return this.http.get<category>( `http://localhost:3000/category/${ id }` )
  }
  DeleteCategory ( id: number ): Observable<category>
  {
    return this.http.delete<category>( `http://localhost:3000/category/${ id }` )
  }
  AddCategory ( product: category ): Observable<category>
  {
    return this.http.post<category>( "http://localhost:3000/category", product )
  }
  UpdateCategory ( product: category ): Observable<category>
  {
    return this.http.put<category>( `http://localhost:3000/category/${ product.id }`, product )
  }
  ListProductByCate (): Observable<any>
  {
    return this.http.get( "http://localhost:3000/category/" )
  }

}
