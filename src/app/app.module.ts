import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './features/user/user-login/user-login.component';
import { UserListComponent } from './features/user/user-list/user-list.component';
import { UserCreateComponent } from './features/user/user-create/user-create.component';
import { UserDetailComponent } from './features/user/user-detail/user-detail.component';
import { UserEditComponent } from './features/user/user-edit/user-edit.component';
import { VendorListComponent } from './features/vendor/vendor-list/vendor-list.component';
import { VendorCreateComponent } from './features/vendor/vendor-create/vendor-create.component';
import { VendorEditComponent } from './features/vendor/vendor-edit/vendor-edit.component';
import { VendorDetailComponent } from './features/vendor/vendor-detail/vendor-detail.component';
import { ProductListComponent } from './features/product/product-list/product-list.component';
import { ProductCreateComponent } from './features/product/product-create/product-create.component';
import { ProductEditComponent } from './features/product/product-edit/product-edit.component';
import { ProductDetailComponent } from './features/product/product-detail/product-detail.component';
import { RequestListComponent } from './features/request/request-list/request-list.component';
import { RequestEditComponent } from './features/request/request-edit/request-edit.component';
import { RequestCreateComponent } from './features/request/request-create/request-create.component';
import { RequestDetailComponent } from './features/request/request-detail/request-detail.component';
import { RequestLinesComponent } from './features/request/request-lines/request-lines.component';
import { RequestReviewComponent } from './features/request/request-review/request-review.component';
import { RequestApproveComponent } from './features/request/request-approve/request-approve.component';
import { LineItemCreateComponent } from './features/line-item/line-item-create/line-item-create.component';
import { LineItemEditComponent } from './features/line-item/line-item-edit/line-item-edit.component';
import { MenuComponent } from './core/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserListComponent,
    UserCreateComponent,
    UserDetailComponent,
    UserEditComponent,
    VendorListComponent,
    VendorCreateComponent,
    VendorEditComponent,
    VendorDetailComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductEditComponent,
    ProductDetailComponent,
    RequestListComponent,
    RequestEditComponent,
    RequestCreateComponent,
    RequestDetailComponent,
    RequestLinesComponent,
    RequestReviewComponent,
    RequestApproveComponent,
    LineItemCreateComponent,
    LineItemEditComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
