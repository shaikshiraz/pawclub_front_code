import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router} from '@angular/router';
declare var $:any;
@Component({
  selector: 'c-photography',
  templateUrl: './c-photography.component.html',
  styleUrls: ['./c-photography.component.css']
})
export class CPhotographyComponent implements OnInit {
  Photos=[];
  constructor(private _photo:CustomerService,private _router:Router) { }

  ngOnInit() {

    this._photo.photo()
.subscribe(
  res=>this.Photos=res,
  err=>{
    if(err instanceof HttpErrorResponse){
       if(err.status===401){
    localStorage.removeItem('token');
       }
    }
  }
)
     
    //advance search
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
  //photography cart page navigation
OnClick(id:any){    
  this._router.navigate(['/customer/photography-cart',id],
  {
    queryParams:{'id':id}
  })
}

}
