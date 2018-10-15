import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router} from '@angular/router';
declare var $:any;

@Component({
  selector: 'c-ngo',
  templateUrl: './c-ngo.component.html',
  styleUrls: ['./c-ngo.component.css']
})
export class CNgoComponent implements OnInit {
 ngoss=[];
  constructor( private _customer:CustomerService,private _router:Router) { }

  ngOnInit() {
    this._customer.ngo()
    .subscribe(
      res=>this.ngoss=res,
      err=>{
        if(err instanceof HttpErrorResponse){
          if(err.status === 401){
            localStorage.removeItem('token');
           this._router.navigate(['/login']);
          }
        }
      }
    )


    //logic for advance search from front end
    
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
    //food cart page navigation
OnClick(id:any){    
  this._router.navigate(['/customer/ngo-cart',id],
  {
    queryParams:{'id':id}
  })
}


}
