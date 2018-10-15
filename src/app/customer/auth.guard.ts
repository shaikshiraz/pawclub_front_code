import { Injectable } from '@angular/core';
import {Router } from '@angular/router';
import { CustomerService } from './customer.service';

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _customerService:CustomerService,private _router:Router){

  }
//   canActivates(route: ActivatedRouteSnapshot, rss: RouterStateSnapshot): Promise<boolean> {

//     return this.loginSvc.isLoggedIn();

// }


 canActivate(route: ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
   
  
  if(this._customerService.loggedIn()){
    localStorage.getItem('currentUser');
     return true;
   } else{
     this._router.navigate(['/customer/login'])
     return false
   }
 }
}
