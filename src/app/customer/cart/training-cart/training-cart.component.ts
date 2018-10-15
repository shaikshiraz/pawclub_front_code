import { Component, OnInit } from '@angular/core';
import '../../../../assets/js/customer/petPhotography/clockyslider.js';
import { CustomerService } from '../../customer.service.js';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-training-cart',
  templateUrl: './training-cart.component.html',
  styleUrls: ['./training-cart.component.css']
})
export class TrainingCartComponent implements OnInit {
  public myData={};
  constructor(private _trainercart:CustomerService,private _route:ActivatedRoute) { }

  ngOnInit() {

    const id=this._route.snapshot.queryParamMap.get('id');
    //  console.log(id);
    //  console.log(this._route.snapshot.queryParamMap.getAll('id'));
    //  console.log(this._route.snapshot.queryParamMap.keys);
    //  console.log(id);
   
  
  this._trainercart.training_cart(id)
  .subscribe(
    (data)=>{
   this.myData=data;
   console.log(this.myData);
    }
  )
  }

}
