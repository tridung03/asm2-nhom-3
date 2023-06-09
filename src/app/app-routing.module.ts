import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { HomepageComponent } from './page/homepage/homepage.component';
import { AbouPageComponent } from './page/abou-page/abou-page.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { DashbroadComponent } from './page/admin/dashbroad/dashbroad.component';
import { NotFountComponent } from './page/not-fount/not-fount.component';
import { AdminProductComponent } from './page/admin/admin-product/admin-product.component';
import { DetaiproductComponent } from './page/detaiproduct/detaiproduct.component';
import { AddproductComponent } from './page/admin/addproduct/addproduct.component';
import { EditproductComponent } from './page/admin/editproduct/editproduct.component';
import { SinginComponent } from './page/singin/singin.component';
import { SingupComponent } from './page/singup/singup.component';
import { ThanhtoanproductComponent } from './page/thanhtoanproduct/thanhtoanproduct.component';
import { GiohangproductComponent } from './page/giohangproduct/giohangproduct.component';
import { ListuserComponent } from './page/admin/listuser/listuser.component';
import { ProductpageComponent } from './page/productpage/productpage.component';
import { CategoryListComponent } from './page/admin/category-list/category-list.component';
import { AddcategoryComponent } from './page/admin/addcategory/addcategory.component';
import { EditCategoryComponent } from './page/admin/edit-category/edit-category.component';

import { EdituserComponent } from './page/admin/edituser/edituser.component';

import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path: '', component: BaseLayoutComponent, children: [
      { path: '', component: HomepageComponent },
      { path: 'about', component: AbouPageComponent },
      { path: 'product/:id', component: DetaiproductComponent },
      { path: 'signin', component: SinginComponent },
      { path: 'signup', component: SingupComponent },
      {
        path: 'product', children: [
          { path: "", component: ProductpageComponent },
          // { path: ":id", component: DetaiproductComponent },


        ]
      },

      { path: 'giohang', component: GiohangproductComponent },

      { path: 'thanhtoan/:id', component: ThanhtoanproductComponent },
      { path: 'product/:id/thanhtoan/:id', component: ThanhtoanproductComponent },




    ]
  },

  {
    path: 'admin', component: AdminLayoutComponent, canActivate: [ AuthGuard ], children: [

      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashbroadComponent },
      { path: 'listuser', component: ListuserComponent },
      { path: 'category', component: CategoryListComponent },
      { path: 'category/addcategory', component: AddcategoryComponent },

      { path: 'category/editcategory/:id', component: EditCategoryComponent },
      { path: 'listuser/edit/:id', component: EdituserComponent },


      { path: 'product', component: AdminProductComponent },
      { path: 'dashboard/add', component: AddproductComponent },
      { path: 'dashboard/edit/:id', component: EditproductComponent }

    ]
  },
  { path: '**', component: NotFountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
