import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user.class';
import { RequestService } from 'src/app/service/request.service';
import { SystemService } from 'src/app/service/system.service';
import { UserService } from 'src/app/service/user.service';
import { Request } from '../../../model/request.class';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {

  title: string= 'Request-Edit';
  request: Request= new Request();
  requestId: number= 0;
  users: User[]= [];
  loggedInUser: User= new User();
  
  constructor(
    private requestSvc: RequestService, 
    private userSvc: UserService,
    private sysSvc: SystemService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.sysSvc.checkLogin();

    this.loggedInUser=this.sysSvc.loggedInUser;

    this.route.params.subscribe(parms => this.requestId = parms["id"]);
    this.requestSvc.get(this.requestId).subscribe(
      resp => {
          this.request= resp as Request;},
      err => {console.log(err);}        
    );

    this.userSvc.list()
    .subscribe(
      resp => {
        this.users = resp as User[];
      },
      err => {
        console.log(err);
      }
    ); 
  }

  save() {
    this.requestSvc.edit(this.request).subscribe(
      resp => {this.request= resp as Request;
              this.router.navigateByUrl('/request-list')},
      err => {console.log(err);}
    );

  }


}

