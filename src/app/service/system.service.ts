import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.class';

@Injectable({
  providedIn: 'root'
})
export class SystemService {
    loggedInUser: User = new User();

  constructor(private router: Router) { }

  // not applicable for bmdb-ng as there is no 'admin' property on user
  // isAdmin(): boolean {
  //   return (this.loggedInUser == null) ? false : this.loggedInUser.admin;
  // }

  // isReviewer(): boolean {
  //   return (this.loggedInUser == null) ? false: this.loggedInUser.reviewer;
  // }

  checkLogin(): void {
    if (this.loggedInUser.id == 0) {
     console.log("User is not logged in... redirecting to login.");
      this.router.navigateByUrl("/user-login");
    }
  }
}

