import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../customer.service';
import {Router} from '@angular/router';
@Component({
  selector: 'c-reset-password',
  templateUrl: './c-reset-password.component.html',
  styleUrls: ['./c-reset-password.component.css']
})
export class CResetPasswordComponent implements OnInit {

  constructor(private _reset:CustomerService,private _router:Router) { }
  

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
