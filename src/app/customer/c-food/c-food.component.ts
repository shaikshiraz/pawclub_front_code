import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router} from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-c-food',
  templateUrl: './c-food.component.html',
  styleUrls: ['./c-food.component.css']
})
export class CFoodComponent implements OnInit {
  foods=[];
  constructor(private _food:CustomerService,private _router:Router) { }

  ngOnInit() {
    this._food.foods()
    .subscribe(
      res=>this.foods=res,
      err=>{
        if(err instanceof HttpErrorResponse){
           if(err.status===401){
        localStorage.removeItem('token');
           }
        }
      }
    )

    $('#otherscheck').click(function(){
      if($(this).prop("checked") == true){
        $( "#otherstext" ).focus();
      }
      else{
        $( "#otherstext" ).val("");
      }
    });
    $( "#otherstext" ).keydown(function( event ) {
      if($('#otherscheck').is(":not(:checked)")){
        event.preventDefault();
      }
    });
    $( "#otherstext" ).click(function( event ) {
      if($('#otherscheck').is(":not(:checked)")){
        event.preventDefault();
        $( "#otherstext" ).blur();
      }
    });
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
  this._router.navigate(['/customer/food-cart',id],
  {
    queryParams:{'id':id}
  })
}

}
