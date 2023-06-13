import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct, thanhtoan } from 'src/app/interface/product';
import { ProductService } from 'src/app/service/product.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component( {
  selector: 'app-thanhtoanproduct',
  templateUrl: './thanhtoanproduct.component.html',
  styleUrls: [ './thanhtoanproduct.component.scss' ]
} )
export class ThanhtoanproductComponent
{
  product!: Iproduct;
  thanhtoanData!: thanhtoan;
  quantity: number = 1;
  paymentMethod: string = 'cash';
  cardType: string = 'visa';
  cardNumber: string = '';
  totalPrice: number = 0;
  Thanhtoan: FormGroup;

  constructor (
    private fb: FormBuilder,
    private router: ActivatedRoute,
    private productService: ProductService
  )
  {
    this.Thanhtoan = this.fb.group( {
      name: [ '', [ Validators.required, Validators.pattern( "[a-zA-Z]+$" ) ] ],
      sdt: [ 0, [ Validators.required, Validators.minLength( 5 ) ] ],
      email: [ '', [ Validators.required, Validators.email ] ],
      diachi: [ '', [ Validators.required, Validators.pattern( "[a-zA-Z]+$" ) ] ],
      soluong: [ 0, [ Validators.required, Validators.minLength( 5 ) ] ],
    } );

    this.router.paramMap.subscribe( params =>
    {
      const id = Number( params.get( "id" ) );
      this.productService.detailProduct( id ).subscribe(
        data =>
        {
          this.product = data;
        },
        error => console.log( error.message )
      );
    } );

    this.Thanhtoan.get( 'soluong' )?.valueChanges.subscribe( value =>
    {
      // Kiểm tra nếu giá trị là số và lớn hơn 0 thì tính tổng
      if ( typeof value === 'number' && value > 0 )
      {
        this.totalPrice = this.product.price * value;
      } else
      {
        this.totalPrice = 0;
      }
    } );
  }

  cart (): void
  {
    console.warn( this.Thanhtoan.value );
    const cart: thanhtoan = {
      name: this.Thanhtoan.value.name || "",
      sdt: this.Thanhtoan.value.sdt || 0,
      email: this.Thanhtoan.value.email || "",
      diachi: this.Thanhtoan.value.diachi || "",
      soluong: this.Thanhtoan.value.soluong || 0
    };

    console.log( 'Total Price:', this.totalPrice );

    // Thực hiện xử lý thanh toán dựa trên các giá trị đã nhập
    if ( this.paymentMethod === 'cash' )
    {
      // Xử lý thanh toán tiền mặt
    } else if ( this.paymentMethod === 'card' )
    {
      // Xử lý thanh toán thẻ
      // Sử dụng các giá trị: this.cardType, this.cardNumber
    }

    this.productService.thanhToan( cart ).subscribe( data =>
    {
      console.log( data );
    } );
  }
}
