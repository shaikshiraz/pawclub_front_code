import { Component, OnInit } from '@angular/core';
import { VenderService } from '../vender.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-v-forgot-password',
  templateUrl: './v-forgot-password.component.html',
  styleUrls: ['./v-forgot-password.component.css']
})
export class VForgotPasswordComponent implements OnInit {

  msg:string=null;
  constructor(private _forgot:VenderService,private _router:Router) { }


  public Forgot(value:any) {
     
      this._forgot.forgotPassword(value)
      .subscribe(
        res=> {
          // console.log("please check the email");
          
          console.log(res);
          alert("you are successfully submitted form")
          this._router.navigate(['/home']);
          },
        err=>console.log(err)
      )
    }
  ngOnInit() {
  }

}
