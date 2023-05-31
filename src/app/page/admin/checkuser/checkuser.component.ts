import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component( {
  selector: 'app-checkuser',
  templateUrl: './checkuser.component.html',
  styleUrls: [ './checkuser.component.scss' ]
} )
export class CheckuserComponent
{
  // constructor ( private router: Router ) { }

  // canActivate (): boolean
  // {
  //   // Kiểm tra quyền của người dùng (ví dụ: từ thông tin xác thực hoặc dữ liệu vai trò lấy từ API)
  //   const isAdmin = user.role === "admin";

  //   if ( !isAdmin )
  //   {
  //     this.router.navigate( [ '/home' ] ); // Chuyển hướng người dùng về trang home
  //     return false; // Không cho phép truy cập
  //   }

  //   return true; // Cho phép truy cập
  // }
}
