import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
declare var $:any;
declare var $stimgwidth;
@Component({
  selector: 'c-kennel',
  templateUrl: './c-kennel.component.html',
  styleUrls: ['./c-kennel.component.css']
})
export class CKennelComponent implements OnInit {
  kennel=[];
  
  constructor(private _kennel:CustomerService,private _router:Router) { }

  ngOnInit() {
    this._kennel.kennel()
    .subscribe(
      res=>this.kennel=res,
      err=>{
        if(err instanceof HttpErrorResponse){
           if(err.status===401){
        localStorage.removeItem('token');
           }
        }
      }
    )
    // $stimgwidth = $(".stay-img-wrapper").width();
    // alert($stimgwidth);
    //advance search logic
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

 //kennel cart page navigation
 OnClick(id:any){    
  this._router.navigate(['/customer/kennel-cart',id],
  {
    queryParams:{'id':id}
  })
}


}
