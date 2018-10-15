import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../customer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-swimming-cart',
  templateUrl: './swimming-cart.component.html',
  styleUrls: ['./swimming-cart.component.css']
})
export class SwimmingCartComponent implements OnInit {

  public myData={};
  constructor(private _swimmingcart:CustomerService,private _route:ActivatedRoute) { }

  ngOnInit() {
    const id=this._route.snapshot.queryParamMap.get('id');
    //  console.log(id);
    //  console.log(this._route.snapshot.queryParamMap.getAll('id'));
    //  console.log(this._route.snapshot.queryParamMap.keys);
    //  console.log(id);
   
  
  this._swimmingcart.swimming_cart(id)
  .subscribe(
    (data)=>{
   this.myData=data;
   console.log(this.myData);
    }
  )
  }

}
