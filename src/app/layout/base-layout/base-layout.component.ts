import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interface/user';
import { UserService } from 'src/app/seviceuser/user.service';

@Component( {
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: [ './base-layout.component.scss' ]
} )
export class BaseLayoutComponent implements OnInit
{
  loggedIn: boolean = false;
  users: User[] = [];
  name: string = '';
  userId: number = 0;

  constructor ( private userService: UserService, private route: ActivatedRoute ) { }

  ngOnInit ()
  {
    this.checkLoggedIn();
  }

  checkLoggedIn ()
  {
    this.loggedIn = this.userService.isLoggedIn();
    if ( this.loggedIn )
    {
      this.route.params.subscribe( params =>
      {
        this.userId = parseInt( params[ 'id' ] ); // Chuyển đổi kiểu dữ liệu của userId từ string sang number
        this.userService.getUser( this.userId ).subscribe(
          ( user: User ) =>
          {
            if ( user )
            {
              this.name = user.name; // Gán giá trị `name` từ thông tin người dùng
            }
          },
          ( error: any ) =>
          {
            console.log( 'Lỗi khi lấy thông tin người dùng', error );
          }
        );
      } );
    }
  }


  logout ()
  {
    this.userService.logout();
    this.loggedIn = false;
    this.name = '';
  }
}
