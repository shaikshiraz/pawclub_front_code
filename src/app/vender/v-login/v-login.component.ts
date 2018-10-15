import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VenderService } from '../vender.service';
import { FbService } from '../../customer/fb.service';

@Component({
  selector: 'app-v-login',
  templateUrl: './v-login.component.html',
  styleUrls: ['./v-login.component.css']
})
export class VLoginComponent implements OnInit {

  constructor(private _login:VenderService,private _router:Router,private fb:FbService) { 
  
  }

  loginUser() {
    this.fb.loginwithfb()
      .then((data) => {
         this._router.navigate(['/home']);
         
      })
      .catch((err) => {
        console.log(err);
        alert('User is already exis');
      });
  }


  

  public Login(value:any) {

  console.log(value);
    // const fd:FormData=new FormData();
    // fd.append('email',value.email);
    // fd.append('password',value.password);
   
    this._login.loginUser(value)
    .subscribe(
      res=> {
        console.log(res);
        localStorage.setItem('token',res.token);
        this._router.navigate(['/venders/venders-home']);
        },
      err=>console.log(err)
    )
  }

    
  ngOnInit() {
    
  }

}
