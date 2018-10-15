import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router} from '@angular/router';
declare var $:any;
@Component({
  selector: 'c-trainer',
  templateUrl: './c-trainer.component.html',
  styleUrls: ['./c-trainer.component.css']
})
export class CTrainerComponent implements OnInit {
  Trainers=[];
  constructor(private _trainer:CustomerService,private _router:Router) { }

  ngOnInit() {

    this._trainer.trainer()
    .subscribe(
      res=>this.Trainers=res,
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
//trainer cart page navigation
OnClick(id:any){    
  this._router.navigate(['/customer/trainer-cart',id],
  {
    queryParams:{'id':id}
  })
}


}
