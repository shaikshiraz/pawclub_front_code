import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../customer.service';
import {Router} from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-c-forgot-password',
  templateUrl: './c-forgot-password.component.html',
  styleUrls: ['./c-forgot-password.component.css']
})
export class CForgotPasswordComponent implements OnInit {
  msg:string=null;
  constructor(private _forgot:CustomerService,
    private _flashMessagesService: FlashMessagesService,
    private _router:Router) { }


  public Forgot(value:any) {
     
      this._forgot.forgotPassword(value)
      .subscribe(
        res=> {
         
           console.log(res);
           this._flashMessagesService.show('We are in about component!');
          },
          
        err=>console.log(err)
        
      )
    }
  ngOnInit() {
  }

}
