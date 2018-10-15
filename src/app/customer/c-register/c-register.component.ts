import { Component, OnInit } from '@angular/core';
 import {CustomerService} from '../customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'c-register',
  templateUrl: './c-register.component.html',
  styleUrls: ['./c-register.component.css']
})
export class CRegisterComponent implements OnInit {
  // RegisterForm: FormGroup;
  //  registerUserData={};
  // lab="sachin";
  // names="badnikai";
  constructor(private _registration:CustomerService,private _router:Router) { 
 
  }

  public Registration(value) {   
    console.log(value);
    this._registration.User(value)
    .subscribe(
      res=>{console.log(res)
      localStorage.setItem('token',res.token)
         this._router.navigate(['/customer/login']);
        },
      err=>console.log(err)
    );
  }


  ngOnInit() {

  
  }

}
