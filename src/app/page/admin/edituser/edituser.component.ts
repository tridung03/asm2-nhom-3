import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interface/user';
import { UserService } from 'src/app/seviceuser/user.service';

@Component( {
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: [ './edituser.component.scss' ]
} )
export class EdituserComponent
{

  user!: User


  constructor ( private router: ActivatedRoute, private route: Router, private userSevice: UserService
  )
  {

  }

  ngOnInit (): void
  {
    const productId = this.router.snapshot.params[ 'id' ];//lay id san pham
    this.userSevice.getUser( productId ).subscribe( ( product ) =>
    {
      this.user = product
    } )
  }

  onhandleEdit (): void
  {




    this.userSevice.editUser( this.user ).subscribe( () =>
    {
      this.route.navigateByUrl( "/admin/listuser" )
    } )
  }
}
