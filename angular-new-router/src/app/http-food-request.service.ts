import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpFoodRequestService {

  constructor(public ht:HttpClient) { }

  getfood(){
    return this.ht.get("http://localhost:3000/foodItems");
  }
  addToCart(data: any){
    return this.ht.post("http://localhost:3000/cart", data);
  }
  getcart(){
    return this.ht.get("http://localhost:3000/cart");
  }
}
