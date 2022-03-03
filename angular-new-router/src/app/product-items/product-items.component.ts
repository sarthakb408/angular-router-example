import { Component, OnInit, Output } from '@angular/core';
import { HttpFoodRequestService } from '../http-food-request.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.css']
})
export class ProductItemsComponent implements OnInit {

  constructor(public ht: HttpFoodRequestService) { }
  receiveFood: any;
  data: any;
  counter:any = 0;
  productData:any;
  ngOnInit() {
    this.ht.getfood().subscribe((foodtdata) => this.show(foodtdata));
  }

  show(foodtdata: any) {
    this.receiveFood = foodtdata;
  }


  addtocart(productData: any) {
    productData.id = Math.floor(Math.random() * 100);

    this.ht.addToCart(productData).subscribe((data) => console.log(data))
  }


}

