import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router} from '@angular/router';
declare var $:any;
@Component({
  selector: 'c-swimming',
  templateUrl: './c-swimming.component.html',
  styleUrls: ['./c-swimming.component.css']
})
export class CSwimmingComponent implements OnInit {
  Swimmings=[];
  constructor(private _swimming:CustomerService,private _router:Router) { }

  ngOnInit() {
      
    this._swimming.swimming()
    .subscribe(
      res=>this.Swimmings=res,
      err=>{
        if(err instanceof HttpErrorResponse){
           if(err.status===401){
        localStorage.removeItem('token');
           }
        }
      }
    )

    //
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
//swimmming cart page navigation
OnClick(id:any){    
  this._router.navigate(['/customer/swimming-cart',id],
  {
    queryParams:{'id':id}
  })
}
}
