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
    VendorDetailComponent
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
