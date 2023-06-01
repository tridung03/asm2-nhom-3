import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './page/homepage/homepage.component';
import { AbouPageComponent } from './page/abou-page/abou-page.component';
import { NotFountComponent } from './page/not-fount/not-fount.component';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { DashbroadComponent } from './page/admin/dashbroad/dashbroad.component';
import { AdminProductComponent } from './page/admin/admin-product/admin-product.component';
import { HttpClientModule } from '@angular/common/http';
import { DetaiproductComponent } from './page/detaiproduct/detaiproduct.component';
import { AddproductComponent } from './page/admin/addproduct/addproduct.component';
import { EditproductComponent } from './page/admin/editproduct/editproduct.component'
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SingupComponent } from './page/singup/singup.component';
import { SinginComponent } from './page/singin/singin.component';
import { ThanhtoanproductComponent } from './page/thanhtoanproduct/thanhtoanproduct.component';
import { GiohangproductComponent } from './page/giohangproduct/giohangproduct.component';
import { CheckuserComponent } from './page/admin/checkuser/checkuser.component';
import { EdituserComponent } from './page/admin/edituser/edituser.component';
import { ListuserComponent } from './page/admin/listuser/listuser.component';

@NgModule( {
  declarations: [
    AppComponent,
    HomepageComponent,
    AbouPageComponent,
    NotFountComponent,
    BaseLayoutComponent,
    AdminLayoutComponent,
    DashbroadComponent,
    AdminProductComponent,
    DetaiproductComponent,
    AddproductComponent,
    EditproductComponent,
    SingupComponent,
    SinginComponent,
    ThanhtoanproductComponent,
    GiohangproductComponent,
    CheckuserComponent,
    EdituserComponent,
    ListuserComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [ AppComponent ]
} )
export class AppModule { }
