import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../customer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transportation-cart',
  templateUrl: './transportation-cart.component.html',
  styleUrls: ['./transportation-cart.component.css']
})
export class TransportationCartComponent implements OnInit {
  public myData={};
  constructor(private _transportation_cart:CustomerService,private _route:ActivatedRoute) { }

  ngOnInit() {
    const id=this._route.snapshot.queryParamMap.get('id');
    //  console.log(id);
    //  console.log(this._route.snapshot.queryParamMap.getAll('id'));
    //  console.log(this._route.snapshot.queryParamMap.keys);
    //  console.log(id);
   
  
  this._transportation_cart.transportation_cart(id)
  .subscribe(
    (data)=>{
   this.myData=data;
   console.log(this.myData);
    }
  )
 
  }

}
