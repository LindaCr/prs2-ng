import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LineItemCreateComponent } from './features/line-item/line-item-create/line-item-create.component';
import { LineItemEditComponent } from './features/line-item/line-item-edit/line-item-edit.component';
import { ProductCreateComponent } from './features/product/product-create/product-create.component';
import { ProductDetailComponent } from './features/product/product-detail/product-detail.component';
import { ProductEditComponent } from './features/product/product-edit/product-edit.component';
import { ProductListComponent } from './features/product/product-list/product-list.component';
import { RequestApproveComponent } from './features/request/request-approve/request-approve.component';
import { RequestCreateComponent } from './features/request/request-create/request-create.component';
import { RequestDetailComponent } from './features/request/request-detail/request-detail.component';
import { RequestEditComponent } from './features/request/request-edit/request-edit.component';
import { RequestLinesComponent } from './features/request/request-lines/request-lines.component';
import { RequestListComponent } from './features/request/request-list/request-list.component';
import { RequestReviewComponent } from './features/request/request-review/request-review.component';
import { UserCreateComponent } from './features/user/user-create/user-create.component';
import { UserDetailComponent } from './features/user/user-detail/user-detail.component';
import { UserEditComponent } from './features/user/user-edit/user-edit.component';
import { UserListComponent } from './features/user/user-list/user-list.component';
import { UserLoginComponent } from './features/user/user-login/user-login.component';
import { VendorCreateComponent } from './features/vendor/vendor-create/vendor-create.component';
import { VendorDetailComponent } from './features/vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './features/vendor/vendor-edit/vendor-edit.component';
import { VendorListComponent } from './features/vendor/vendor-list/vendor-list.component';

const routes: Routes = [
  {path: '', redirectTo:'/user-list', pathMatch:'full'},
  {path: 'user-login', component:UserLoginComponent},
  {path: 'user-list', component:UserListComponent},
  {path: 'user-detail/:id', component:UserDetailComponent},
  {path: 'user-create', component:UserCreateComponent},
  {path: 'user-edit/:id', component:UserEditComponent},
  {path: 'vendor-list', component:VendorListComponent},
  {path: 'vendor-detail/:id', component:VendorDetailComponent},
  {path: 'vendor-create', component:VendorCreateComponent},
  {path: 'vendor-edit/:id', component:VendorEditComponent},
  {path: 'product-list', component:ProductListComponent},
  {path: 'product-detail/:id', component:ProductDetailComponent},
  {path: 'product-create', component:ProductCreateComponent},
  {path: 'product-edit/:id', component:ProductEditComponent},
  {path: 'request-list', component:RequestListComponent},
  {path: 'request-create', component:RequestCreateComponent},
  {path: 'request-edit/:id', component:RequestEditComponent},
  {path: 'request-detail/:id', component:RequestDetailComponent},
  {path: 'request-lines/:id', component:RequestLinesComponent},
  {path: 'line-item-create/:id', component:LineItemCreateComponent},
  {path: 'line-item-edit/:id', component:LineItemEditComponent},
  {path: 'request-review', component:RequestReviewComponent},
  {path: 'request-approve/:id', component:RequestApproveComponent},
  {path:'**', component:UserListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

