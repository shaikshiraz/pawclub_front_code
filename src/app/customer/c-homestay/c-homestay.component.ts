import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';

declare var $:any;
@Component({
  selector: 'c-homestay',
  templateUrl: './c-homestay.component.html',
  styleUrls: ['./c-homestay.component.css']
})
export class CHomestayComponent implements OnInit {
  private term:string="";

homestays=[];
data:{}
isValid: boolean = false;
  constructor(private _home:CustomerService, private _router:Router,
     private router:ActivatedRoute,
   private _http:HttpClient) { 
    this.router.params.subscribe(params=>{
      console.log(params);
    });
  }
 
_id:string;
  ngOnInit() {
this._home.homestay()
.subscribe(
  res=>this.homestays=res,
  err=>{
    if(err instanceof HttpErrorResponse){
       if(err.status===401){
    localStorage.removeItem('token');
       }
    }
  }
  
)



//advance search code
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

  OnClick(id:any){


    // this._http.post<any>("http://localhost:3000/api/homestay/:",id)
    //    .subscribe(
    //      (data:any[])=>{
    //        console.log(data)
    //      }
    //    )

       
    this._router.navigate(['/customer/home-stay-cart',id],
    {
      queryParams:{'id':id}
    })

  }

  public homesearchs(value) {   
    console.log(value);
    this._home.homesearch(value)
    .subscribe(
      res=>this.homestays=res,
      err=>console.log(err)
    );
  }

 

}
