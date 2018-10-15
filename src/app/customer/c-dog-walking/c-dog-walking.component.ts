import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
declare var $:any;
@Component({
  selector: 'c-dog-walking',
  templateUrl: './c-dog-walking.component.html',
  styleUrls: ['./c-dog-walking.component.css']
})
export class CDogWalkingComponent implements OnInit {
  dogwalk=[];
  constructor(private _dogwalk:CustomerService,private _router:Router) { }

  ngOnInit() {
    this._dogwalk.dogwalking()
    .subscribe(
      res=>this.dogwalk=res,
      err=>{
        if(err instanceof HttpErrorResponse){
           if(err.status===401){
        localStorage.removeItem('token');
           }
        }
      }
    )

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

   //dogwalking cart page navigation
 OnClick(id:any){    
  this._router.navigate(['/customer/dog-walk-cart',id],
  {
    queryParams:{'id':id}
  })
}

}
