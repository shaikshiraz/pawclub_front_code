import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
declare var $:any;
@Component({
  selector: 'c-grooming',
  templateUrl: './c-grooming.component.html',
  styleUrls: ['./c-grooming.component.css']
})
export class CGroomingComponent implements OnInit {
 grooming=[];
  constructor(private _grooming:CustomerService,private _router:Router) { }
   
  ngOnInit() {
    this._grooming.grooming()
    .subscribe(
      res=>this.grooming=res,
      err=>{
        if(err instanceof HttpErrorResponse){
           if(err.status===401){
        localStorage.removeItem('token');
           }
        }
      }
    )

       //  //advance search code
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


  //grooming cart page navigation
OnClick(id:any){    
  this._router.navigate(['/customer/grooming-cart',id],
  {
    queryParams:{'id':id}
  })
}

}
