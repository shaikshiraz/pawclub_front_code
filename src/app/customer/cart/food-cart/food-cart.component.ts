import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../customer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-food-cart',
  templateUrl: './food-cart.component.html',
  styleUrls: ['./food-cart.component.css']
})
export class FoodCartComponent implements OnInit {

  public myData={};
  constructor(private _foodcart:CustomerService,private _route:ActivatedRoute) { }

  ngOnInit() {
    const id=this._route.snapshot.queryParamMap.get('id');
    //  console.log(id);
    //  console.log(this._route.snapshot.queryParamMap.getAll('id'));
    //  console.log(this._route.snapshot.queryParamMap.keys);
    //  console.log(id);
   
  
  this._foodcart.food_cart(id)
  .subscribe(
    (data)=>{
   this.myData=data;
   console.log(this.myData);
    }
  )

  }

}
