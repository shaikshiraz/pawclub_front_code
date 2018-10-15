import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private _loginUrl="http://localhost:3000/api/auth";
  //ngo api
  private _ngo="http://localhost:3000/api/ngo";
//homestay get api
 private _homestayget="http://localhost:3000/api/homestay";
 //adoption get api
 private _adoptionget="http://localhost:3000/api/adoption";
  //_found get api
  private _found="http://localhost:3000/api/found-pet";
  //_lost get api
  private _lost="http://localhost:3000/api/lost-pet";
 //dog walking get api
 private _dogwalking="http://localhost:3000/api/dog-walking";
 //food get api
 private _food="http://localhost:3000/api/food";
 //grooming get api
 private _grooming="http://localhost:3000/api/grooming";
 //kennel get api
 private _kennel="http://localhost:3000/api/kennel";
  //photography get api
  private _photo="http://localhost:3000/api/photo";
  //  //_trainer get api
  private _trainer="http://localhost:3000/api/trainer";
  //  //_swimming get api
  private _swimming="http://localhost:3000/api/swimming";
  //transportation get api
  private _transportation="http://localhost:3000/api/transportation";

  //user registration post api
 private _Register="http://localhost:3000/api/users";

 //forgot password post api
 private _forgot="http://localhost:3000/api/forgot";

 
  constructor(private _http:HttpClient,private _router:Router) { }

  // registerUser(user){
  //   return this._http.post<any>(this._registerUrl,user);
  
  // }

  loginUser(user){
    return this._http.post<any>(this._loginUrl,user);
    // this._router.navigate(['/login']);
  }
  //ngo api
  ngo(){
    return this._http.get<any>(this._ngo);
  }
  //ngo get api end
  //homestay api
  homestay(){
    return this._http.get<any>(this._homestayget);
  }
  //homestay get api end
 
  
  //adoption get 
  adoption(){
    return this._http.get<any>(this._adoptionget);
  }

  //found get 
  found(){
    return this._http.get<any>(this._found);
  }

   //found get 
   lost(){
    return this._http.get<any>(this._lost);
  }
   //dog walking get api
   dogwalking(){
    return this._http.get<any>(this._dogwalking);
  } 
 //food get api
 foods(){
      return this._http.get<any>(this._food);
    }
   //grooming get api
   grooming(){
    return this._http.get<any>(this._grooming);
  }
  //kennel get api
  kennel(){
    return this._http.get<any>(this._kennel);
  }
  //photography get api
  photo(){
    return this._http.get<any>(this._photo);
  }
  //trainer get api
  trainer(){
    return this._http.get<any>(this._trainer);
  }
 //swimming get api
  swimming(){
    return this._http.get<any>(this._swimming);
  }
  //transportation get api
  transportation(){
    return this._http.get<any>(this._transportation)
  }
  //user or customer registration
  User(formGroup) {
    return this._http.post<any>(this._Register,formGroup);
  }

  forgotPassword(formGroup){
    return this._http.post<any>(this._forgot,formGroup); 
  }

  homesearch(formGroup){
    return this._http.post<any>("http://localhost:3000/api/homestaysearch",formGroup); 
  }


  resetpassword(formGroup){
    return this._http.post<any>("http://localhost:3000/api/reset/password",formGroup); 
  }
  getuser(){
    return this._http.get<any>("http://localhost:3000/api/getuser");
  }

  getToken(){
    return localStorage.getItem('token');
  }
  loggedIn()
  {
    return localStorage.getItem('token');
  }
  logoutUser(){
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('lastname');
    localStorage.removeItem('image');
    this._router.navigate(['/home']);

  }

//cart api starts
   //homestay get api starts
   homestayid(id:any){
    // console.log(id);
    return this._http.get<any>("http://localhost:3000/api/homestay/"+id)  
  }
  //homestay get api end
//kennel get api starts
  kennel_cart(id:any){
    // console.log(id);
    return this._http.get<any>("http://localhost:3000/api/kennel/"+id)  
  }
   //kennel get api end

   //trainer get api starts
  training_cart(id:any){
    // console.log(id);
    return this._http.get<any>("http://localhost:3000/api/trainer/"+id)  
  }
   //trainer get api end
 //grooming get api starts
 grooming_cart(id:any){
  // console.log(id);
  return this._http.get<any>("http://localhost:3000/api/grooming/"+id)  
}
 //grooming get api end

 //grooming get api starts
 dog_walking_cart(id:any){
  // console.log(id);
  return this._http.get<any>("http://localhost:3000/api/dog-walking/"+id)  
}
 //grooming get api end

 //transportation_cart get api starts
 transportation_cart(id:any){
  // console.log(id);
  return this._http.get<any>("http://localhost:3000/api/transportation/"+id)  
}
 //transportation_cart get api end

  //swimming_cart get api starts
  swimming_cart(id:any){
    // console.log(id);
    return this._http.get<any>("http://localhost:3000/api/swimming/"+id)  
  }
   //swimming_cart get api end

     //photography_cart get api starts
  photography_cart(id:any){
    // console.log(id);
    return this._http.get<any>("http://localhost:3000/api/photo/"+id)  
  }
   //photography_cart get api end

    //food_cart get api starts
  food_cart(id:any){
    // console.log(id);
    return this._http.get<any>("http://localhost:3000/api/food/"+id)  
  }
   //food_cart get api end
  //ngo_cart get api starts
  ngo_cart(id:any){
    // console.log(id);
    return this._http.get<any>("http://localhost:3000/api/ngo/"+id)  
  }
   //ngo_cart get api end

    //grooming get api starts
 adoption_cart(id:any){
  // console.log(id);
  return this._http.get<any>("http://localhost:3000/api/adoption/"+id)  
}
 //grooming get api end
}
