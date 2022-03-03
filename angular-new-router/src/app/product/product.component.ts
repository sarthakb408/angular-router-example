import { Component, OnInit } from '@angular/core';
import { HttpDataRequestService } from '../http-data-request.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(public ht: HttpDataRequestService) { }
  receiveProduct:any;
  ngOnInit() {
    this.ht.getdata().subscribe((productdata) => this.show(productdata));
  }

  show(productdata: any) {
    this.receiveProduct = productdata;
  }

}
