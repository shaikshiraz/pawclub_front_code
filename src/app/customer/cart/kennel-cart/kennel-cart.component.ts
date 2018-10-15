import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../customer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-kennel-cart',
  templateUrl: './kennel-cart.component.html',
  styleUrls: ['./kennel-cart.component.css']
})
export class KennelCartComponent implements OnInit {
  public myData={};
  constructor(private _kennelcart:CustomerService,private _route:ActivatedRoute) { }

  ngOnInit() {

    const id=this._route.snapshot.queryParamMap.get('id');
    //  console.log(id);
    //  console.log(this._route.snapshot.queryParamMap.getAll('id'));
    //  console.log(this._route.snapshot.queryParamMap.keys);
    //  console.log(id);
   
  
  this._kennelcart.kennel_cart(id)
  .subscribe(
    (data)=>{
   this.myData=data;
   console.log(this.myData);
    }
  )
  }

}
