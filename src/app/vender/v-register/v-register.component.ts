import { Component, OnInit } from '@angular/core';
import { VenderService } from '../vender.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-v-register',
  templateUrl: './v-register.component.html',
  styleUrls: ['./v-register.component.css']
})
export class VRegisterComponent implements OnInit {

  constructor(private _registration:VenderService,private _router:Router) { 
 
  }

  public Registration(value) {   
    console.log(value);
    this._registration.VenderRegister(value)
    .subscribe(
      res=>{console.log(res)
      localStorage.setItem('token',res.token)
         this._router.navigate(['/venders/login']);
        },
      err=>console.log(err)
    );
  }


  ngOnInit() {

  
  }

}
