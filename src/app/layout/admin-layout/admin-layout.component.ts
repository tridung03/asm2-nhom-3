import { Component } from '@angular/core';
import { UserService } from 'src/app/seviceuser/user.service';

@Component( {
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: [ './admin-layout.component.scss' ]
} )
export class AdminLayoutComponent
{
  constructor ( private auth: UserService )
  {

  }

}
