import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';
import { VenderService } from '../../vender/vender.service';
import { CustomerService } from '../customer.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'header',
  templateUrl: './c-header.component.html',
  styleUrls: ['./c-header.component.css']
})
export class CHeaderComponent implements OnInit {
  users=[];
  
  constructor(private _auth:CustomerService) {
  localStorage.setItem('users',JSON.stringify(this.users));
  const user=JSON.parse(localStorage.getItem('user'));
  console.log(user);
   }
   get user(): any {
    return localStorage.getItem('name');

}
get google(): any {
  return localStorage.getItem('name'),
   localStorage.getItem('image');
}
  ngOnInit() {
    this._auth.getuser()
.subscribe(
  res=>this.users=res,
  
  err=>{
    if(err instanceof HttpErrorResponse){
       if(err.status===401){
    localStorage.removeItem('token');
       }
    }
  }
)
  }


 
}
