import { Injectable,Injector } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';
import {CustomerService} from './customer.service';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector:Injector) { }

  intercept(req,next){
    let authService=this.injector.get(CustomerService);
    let tokenizedReq=req.clone(
      {
        setHeaders:{
          Authorization:`${authService.getToken()}`
        }
      }
    )
    return next.handle(tokenizedReq)
  }
}
