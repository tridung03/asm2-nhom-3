import { Component } from '@angular/core';
import { User } from 'src/app/common/user';
import { UserService } from 'src/app/seviceuser/user.service';

@Component( {
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: [ './base-layout.component.scss' ]
} )
export class BaseLayoutComponent
{
  loggedIn: boolean = false;
  name: string | undefined;

  constructor ( private userService: UserService )
  {
    this.checkLoggedIn();
  }

  checkLoggedIn ()
  {
    this.loggedIn = this.userService.isLoggedIn();
    if ( this.loggedIn )
    {
      const userId = 1; // Thay thế bằng userId thực tế của người dùng
      this.userService.getUser( userId ).subscribe(
        ( user: User ) =>
        {
          this.name = user.name; // Gán giá trị `name` từ thông tin người dùng
        },
        ( error: any ) =>
        {
          console.log( 'Lỗi khi lấy thông tin người dùng', error );
        }
      );
    }
  }

  logout ()
  {
    this.userService.logout();
    this.loggedIn = false;
    this.name = undefined;
  }
}
