import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpFoodRequestService } from '../http-food-request.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public ht: HttpFoodRequestService) { }

  ngOnInit(): void {
    this.ht.getcart().subscribe((fooddata) => this.show(fooddata));
  }
  cartitems: any;

  show(fooddata: any) {
    this.cartitems = fooddata;
  }
}
