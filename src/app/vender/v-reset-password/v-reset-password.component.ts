import { Component, OnInit } from '@angular/core';
import { VenderService } from '../vender.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-v-reset-password',
  templateUrl: './v-reset-password.component.html',
  styleUrls: ['./v-reset-password.component.css']
})
export class VResetPasswordComponent implements OnInit {

  constructor(private _reset:VenderService,private _router:Router) { }
  

  public resetPassword(value) { 
    console.log(value);
    this._reset.resetpassword(value)
    .subscribe(
      res=>{console.log(res)
        },
      err=>console.log(err)
    );
  }
  ngOnInit() {
  }

}
