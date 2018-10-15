import { Component, OnInit } from '@angular/core';
import '../../../../assets/js/customer/petPhotography/clockyslider.js';
import { CustomerService } from '../../customer.service.js';
import { ActivatedRoute } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-photography-cart',
  templateUrl: './photography-cart.component.html',
  styleUrls: ['./photography-cart.component.css']
})
export class PhotographyCartComponent implements OnInit {

  public myData={};
  constructor(private _photocart:CustomerService,private _route:ActivatedRoute) { }

  ngOnInit() {

    const id=this._route.snapshot.queryParamMap.get('id');
    //  console.log(id);
    //  console.log(this._route.snapshot.queryParamMap.getAll('id'));
    //  console.log(this._route.snapshot.queryParamMap.keys);
    //  console.log(id);
   
  
  this._photocart.photography_cart(id)
  .subscribe(
    (data)=>{
   this.myData=data;
   console.log(this.myData);
    }
  )


    $(function () {
      $('#datetimepicker13').datetimepicker({
        format: 'L',
          inline: true,
          sideBySide: true
      });
  });
  }

}
