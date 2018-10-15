import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
declare var $:any;
declare var  $text1:any;
@Component({
  selector: 'c-adoption',
  templateUrl: './c-adoption.component.html',
  styleUrls: ['./c-adoption.component.css']
})
export class CAdoptionComponent implements OnInit {
  adoptions=[];
  founds=[];
  losts=[];
  constructor(private _common:CustomerService,private _router:Router) { }

  ngOnInit() {
 
    this._common.adoption()
.subscribe(
  (data)=>{
    this.adoptions=data;
   
     }
)
this._common.found()
.subscribe(
  (data)=>{
    this.founds=data;
   
     }
)

this._common.lost()
.subscribe(
  res=>this.losts=res,
  err=>{
    if(err instanceof HttpErrorResponse){
       if(err.status===401){
    localStorage.removeItem('token');
       }
    }
  }
)

    //adoption advance search code
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
        $("#adopen").click(function () {
          $("#adoptionpets").toggleClass("hide-450");
          $text1 = $("#adopen span").text();
          ($text1 == "+") ? $("#adopen span").text("-") : $("#adopen span").text("+");
        });
    });

    
     

  }

  //grooming cart page navigation
  OnClick(id:any){    
    this._router.navigate(['/customer/adoption-cart',id],
    {
      queryParams:{'id':id}
    })
  }  

}
