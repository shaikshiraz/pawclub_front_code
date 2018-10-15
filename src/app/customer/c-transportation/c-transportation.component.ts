import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router} from '@angular/router';
declare var $:any;
@Component({
  selector: 'c-transportation',
  templateUrl: './c-transportation.component.html',
  styleUrls: ['./c-transportation.component.css']
})
export class CTransportationComponent implements OnInit {
  Transportations=[];
  constructor(private _transportation:CustomerService,private _router:Router) { }

  ngOnInit() {
    this._transportation.transportation()
    .subscribe(
      res=>this.Transportations=res,
      err=>{
        if(err instanceof HttpErrorResponse){
           if(err.status===401){
        localStorage.removeItem('token');
           }
        }
      }
    )
    //advancedsearch
    $("#advancedsearch").click(function(){
      var x = document.getElementById("normal-section");
        if (x.style.display === "none") {
            $(this).text("Advanced Search");
            $("#normal-section").show();
            $("#advance-section").hide();
        } else {
            $(this).text("Advance Close");
            $("#normal-section").hide();
            $("#advance-section").show();
        }
    });
  }
//transportation cart page navigation
OnClick(id:any){    
  this._router.navigate(['/customer/transportation-cart',id],
  {
    queryParams:{'id':id}
  })
}
}
