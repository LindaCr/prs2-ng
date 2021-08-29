import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LineItem } from 'src/app/model/line-item.class';
import { Product } from 'src/app/model/product.class';
import { User } from 'src/app/model/user.class';
import { LineItemService } from 'src/app/service/line-item.service';
import { ProductService } from 'src/app/service/product.service';
import { RequestService } from 'src/app/service/request.service';
import { SystemService } from 'src/app/service/system.service';
import { Request } from '../../../model/request.class';
 
@Component({
  selector: 'app-line-item-edit',
  templateUrl: './line-item-edit.component.html',
  styleUrls: ['./line-item-edit.component.css']
})
export class LineItemEditComponent implements OnInit {

  title: string= 'Line Item Edit';
  lineItem: LineItem= new LineItem();
  lineItems: LineItem[]= [];
  request: Request= new Request();
  products: Product[]= [];
  requestId: number= 0;
  lineItemId: number= 0;
  loggedInUser: User= new User();

  constructor(
    private lineItemSvc: LineItemService,
    private productSvc: ProductService,
    private requestSvc: RequestService,
    private sysSvc: SystemService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.sysSvc.checkLogin();

    this.loggedInUser=this.sysSvc.loggedInUser;

     this.route.params.subscribe(parms => this.lineItemId = parms["id"]);
     this.lineItemSvc.get(this.lineItemId).subscribe(
       resp => {
           this.lineItem= resp as LineItem;},
       err => {console.log(err);}        
     );

      this.route.params.subscribe(parms => this.requestId = parms["id"]);
      this.requestSvc.get(this.requestId).subscribe(
        resp => {
            this.request= resp as Request;},
        err => {console.log(err);}        
      );

    this.productSvc.list()
    .subscribe(
      resp => {
        this.products = resp as Product[];
      },
      err => {
        console.log(err); 
      }
    );

  }

  save() {
    this.lineItemSvc.edit(this.lineItem).subscribe(
      resp => {this.lineItem= resp as LineItem;
              this.router.navigateByUrl('/request-lines/'+this.lineItem.request.id)},
      err => {console.log(err);}
    );

  }

  compProduct(a: Product, b: Product): boolean {
    return a && b && a.id === b.id;
  }

}
