import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../customer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ngo-cart',
  templateUrl: './ngo-cart.component.html',
  styleUrls: ['./ngo-cart.component.css']
})
export class NgoCartComponent implements OnInit {

 
  public myData={};
  constructor(private _ngocart:CustomerService,private _route:ActivatedRoute) { }


  ngOnInit() {
    const id=this._route.snapshot.queryParamMap.get('id');
    //  console.log(id);
    //  console.log(this._route.snapshot.queryParamMap.getAll('id'));
    //  console.log(this._route.snapshot.queryParamMap.keys);
    //  console.log(id);
   
  
  this._ngocart.ngo_cart(id)
  .subscribe(
    (data)=>{
   this.myData=data;
   console.log(this.myData);
    }
  )

  }

}
