import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user.class';
import { RequestService } from 'src/app/service/request.service';
import { SystemService } from 'src/app/service/system.service';
import { UserService } from 'src/app/service/user.service';
import { Request } from '../../../model/request.class';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  title: string = 'Request-Create';
  request: Request = new Request();
  user: User = new User();
  userId: number = 0;
  loggedInUser: User = new User();


  constructor(
    private requestSvc: RequestService,
    private userSvc: UserService,
    private sysSvc: SystemService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.sysSvc.checkLogin();

    this.loggedInUser = this.sysSvc.loggedInUser;

    this.request.user= this.sysSvc.loggedInUser;


  }

  save() {
    this.requestSvc.create(this.request).subscribe(
      resp => {
        this.request = resp as Request;
        this.router.navigateByUrl('/request-list')
      },
      err => { console.log(err); }
    );

  }

}

