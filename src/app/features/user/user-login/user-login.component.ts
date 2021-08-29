import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.class';
import { SystemService } from 'src/app/service/system.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  title: string= 'Login';
  user: User= new User();
  msg: string='';

  constructor(
    private userSvc: UserService,
    private sysSvc: SystemService,
    private router: Router

  ) { }

  ngOnInit(): void {
  }

  login() {
    this.userSvc.login(this.user).subscribe(
      resp => {
        if (resp == null) {
          this.msg= 'Invalid username/password combination.';
        }
        else {
          this.user=resp as User;
          this.sysSvc.loggedInUser=this.user;
          this.router.navigateByUrl('/user-list');
        }
      },
      err =>{
        console.log('User login error', err);
        this.msg='Error during login';
      }
    );
  }

  // login() {
  //   //call login service using username and password
  //   this.userSvc.login(this.loginView).subscribe(
  //     resp => {
  //       if (resp == null) {
  //         this.msg = "Invalid username / password combo.";
  //       }
  //       else {
  //         this.user = resp as User;
  //         this.systemSvc.loggedInUser = this.user;
  //         this.router.navigateByUrl('/request-list');
  //       }
  //     },
  //     err => {
  //       this.msg = "Error during login"
  //     }
  //   );
  // }


}

