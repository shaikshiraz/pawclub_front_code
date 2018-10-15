import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class VenderService {
  //homestay api
  private _homestayUrl = "http://localhost:3000/api/homestay";//post api

  //medication api
  private _medicationUrl = "http://localhost:3000/api/medications";//post api
  //food api
  private _foodpost = "http://localhost:3000/api/food";

  //found api
  private _foundpost = "http://localhost:3000/api/found-pet";
  //grooming api

  private _groomingpost = " http://localhost:3000/api/grooming";

  //lost api
  private _lostpost = "http://localhost:3000/api/lost-pet";

  //homemade api
  private _homemadepost = "http://localhost:3000/api/home-products";
  //adoption api
  private _adoptionpost = "http://localhost:3000/api/adoption";
  //trainer api
  private _trainerpost = "http://localhost:3000/api/trainer";

  //swimming api
  private _swimming = "http://localhost:3000/api/swimming";

  //dog-walking api
  private _dogwalking = "http://localhost:3000/api/dog-walking";

  //Transportation api
  private _transportation = "http://localhost:3000/api/transportation";

  //ngo api
  private _ngo="http://localhost:3000/api/ngo";
 //kennel api
 private _kennel="http://localhost:3000/api/kennel";
//pet profile api
 private _petprofile:"http://localhost:3000/api/petprofile";
 
 //photography api
   private _photography:"http://localhost:3000/api/photo";

   //vender login url
   private _loginUrl="http://localhost:3000/api/venders/auth";

   //vender forgot url
   private _forgot="http://localhost:3000/api/";
   //
    // registration post api
 private _Register="http://localhost:3000/api/venders";


  constructor(private _http: HttpClient, private _router: Router) { }

  //homestay code
  //homestay post logic
  homestay(formGroup) {
    return this._http.post<any>(this._homestayUrl, formGroup);

  }
  // end homestay post logic

  //medications post logic
  medications(formGroup) {
    return this._http.post<any>(this._medicationUrl, formGroup);
  }
  //end medications post logic

  //food post logic
  food(formGroup) {
    return this._http.post<any>(this._foodpost, formGroup);
  }
  //end food post logic

  //grooming post logic
  grooming(formGroup) {
    console.log(formGroup);
    return this._http.post<any>(this._groomingpost, formGroup)
  }
  //end grooming post logic
  //found post logic
  found(formGroup) {
    return this._http.post<any>(this._foundpost, formGroup)
  }
  //end found post logic

  //lost post logic
  lost(formGroup) {
    return this._http.post<any>(this._lostpost, formGroup)
  }
  //end lost post logic

  //homemade post logic
  homemade(formGroup) {
    return this._http.post<any>(this._homemadepost, formGroup)
  }
  //end homemade post logic

  //adoption post logic
  adoption(formGroup) {
    return this._http.post<any>(this._adoptionpost, formGroup)
  }
  //end adoption post logic

  //trainer post logic
  trainer(formGroup) {
    return this._http.post<any>(this._trainerpost, formGroup)
  }
  //end trainer post logic

  //swimming post logic
  swimming(formGroup) {
    return this._http.post<any>(this._swimming, formGroup)
  }
  //end swimming post logic

  //walking post logic
  walking(formGroup) {
    return this._http.post<any>(this._dogwalking, formGroup)
  }
  //end walking post logic

  //Transportation post logic
  Transportation(formGroup) {
    return this._http.post<any>(this._transportation, formGroup)
  }
  //end Transportation post logic
  
     //ngo post logic
     ngo(formGroup){
      return this._http.post<any>(this._ngo,formGroup)
    }
    //end ngo post logic

     //kennel post logic
     kennel(formGroup){
      return this._http.post<any>(this._kennel,formGroup)
    }
    //end kennel post logic

   //pet post logic
   pet(formGroup) {
    return this._http.post<any>("http://localhost:3000/api/petprofile", formGroup);
  }
  //end pet post logic


   //photo post logic
   phot(formGroup) {
    return this._http.post<any>("http://localhost:3000/api/photo",formGroup);
  }
  //end photo post logic
  homesearch(formGroup){
    return this._http.post<any>('http://localhost:3000/api/homestaysearch',formGroup); 
  }

  //vender login user
  loginUser(user){
    return this._http.post<any>(this._loginUrl,user);
    // this._router.navigate(['/login']);
  }

  //vender forfot password
  forgotPassword(formGroup){
    return this._http.post<any>(this._forgot,formGroup); 
  }
 

  //vender register
  VenderRegister(formGroup){
    return this._http.post<any>(this._Register,formGroup);
  }
  //vender reset password
  resetpassword(formGroup){
    return this._http.post<any>("http://localhost:3000/api/reset/:token",formGroup); 
  }
  

}
