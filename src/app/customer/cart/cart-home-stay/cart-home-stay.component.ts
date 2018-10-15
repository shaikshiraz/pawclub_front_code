import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../customer.service';
import { HttpErrorResponse } from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
// import { parse } from 'url';

import '../../../../assets/js/customer/homestaycart/jqdate.js';
import '../../../../assets/js/customer/homestaycart/work.js';
declare var  $winwid;
declare var $:any;
@Component({
  selector: 'app-cart-home-stay',
  templateUrl: './cart-home-stay.component.html',
  styleUrls: ['./cart-home-stay.component.css']
})
export class CartHomeStayComponent implements OnInit {
  public homestayId;
 public myData={};
 kennel=[];
  constructor(private _homecart:CustomerService,private _route:ActivatedRoute) { }
  t={};
 
  ngOnInit() {
  //  console.log(this._route.snapshot.queryParamMap.has('id'));
   const id=this._route.snapshot.queryParamMap.get('id');
  //  console.log(id);
  //  console.log(this._route.snapshot.queryParamMap.getAll('id'));
  //  console.log(this._route.snapshot.queryParamMap.keys);
  //  console.log(id);
 

this._homecart.homestayid(id)
.subscribe(
  (data)=>{
 this.myData=data;
 console.log(this.myData);
  }
)

  
  


  }

}
