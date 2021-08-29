import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LineItem } from 'src/app/model/line-item.class';
import { User } from 'src/app/model/user.class';
import { Vendor } from 'src/app/model/vendor.class';
import { LineItemService } from 'src/app/service/line-item.service';
import { RequestService } from 'src/app/service/request.service';
import { SystemService } from 'src/app/service/system.service';
import { Request } from '../../../model/request.class';

@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css']
})
export class RequestLinesComponent implements OnInit {

  title: string= 'Request-Lines';
  request: Request= new Request();
  requestId: number= 0;
  lineItems: LineItem[]= [];
  lineItem: LineItem= new LineItem();
  vendorId: number= 0;
  vendor: Vendor=new Vendor();
  loggedInUser: User= new User();


  constructor(
    private requestSvc: RequestService,
    private lineItemSvc: LineItemService,
    private sysSvc: SystemService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    
    this.sysSvc.checkLogin();

    this.loggedInUser=this.sysSvc.loggedInUser;
        
    this.route.params.subscribe(parms => this.requestId = parms["id"]);
    this.requestSvc.get(this.requestId).subscribe(
      resp => { this.request = resp as Request;},
      err=> {console.log(err);}
    );
        
        
    this.route.params.subscribe(parms => this.requestId = parms["id"]);
    this.lineItemSvc.getLinesForRequest(this.requestId).subscribe(
      resp => { this.lineItems = resp as LineItem[];},
      err=> {console.log(err);}
    );

  }

  save() {
    this.requestSvc.create(this.request).subscribe(
      resp => {this.request= resp as Request;
              this.router.navigateByUrl('/request-list')},
      err => {console.log(err);}
    );
  }

  delete(lineItemId: number) {
    this.lineItemSvc.delete(lineItemId).subscribe( 
      resp =>{
        this.lineItem= resp as LineItem;
        // refresh request  
        this.route.params.subscribe(parms => this.requestId = parms["id"]);
        this.requestSvc.get(this.requestId).subscribe(
          resp => { this.request = resp as Request;},
          err=> {console.log(err);}
        );
        //get lines for request
        this.route.params.subscribe(parms => this.requestId = parms["id"]);
        this.lineItemSvc.getLinesForRequest(this.requestId).subscribe(
          resp => { this.lineItems = resp as LineItem[];},
          err=> {console.log(err);}
        );
        this.router.navigateByUrl('/request-lines/'+this.request.id);
      },
      err => {
        console.log(err);
      }
    );
  }

  submit() {
      this.requestSvc.submitForReview(this.request).subscribe(
        resp => {this.request= resp as Request;
                this.router.navigateByUrl('/request-list')},
        err => {console.log(err);}
      );
  }

}


