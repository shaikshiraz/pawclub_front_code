import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../customer.service';
// import {FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { FbService } from '../fb.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider,
  SocialUser
} from 'angular5-social-login';


@Component({
  selector: 'c-login',
  templateUrl: './c-login.component.html',
  styleUrls: ['./c-login.component.css']
})
export class CLoginComponent implements OnInit {
  // GroomingForm: FormGroup;

  userData:{};
  constructor(private _grooming:CustomerService,
    private _router:Router,
     private fb:FbService,
     private _flashMessagesService: FlashMessagesService,
     private socialAuthService: AuthService
    ) { 
     
    
    // this.GroomingForm = this.fb.group({
    //   'email': ['', Validators.compose([Validators.required])],
    //   'password': ['', Validators.compose([Validators.required])],
  
    // });
  }

  public socialSignIn(socialPlatform :string) {
    let socialPlatformProvider;
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }else if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
        // Now sign-in with userData

        localStorage.setItem('name',userData.name);
        localStorage.setItem('token',userData.token);
        localStorage.setItem('image',userData.image);
            
      }
      
    );
  }
  get google(): any {
    return localStorage.getItem('name');
  }

  // loginuser() {
  //   this.fb.loginwithfb()
  //     .then((data) => {
  //        this._router.navigate(['/home']);
         
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       alert('User is already exis');
  //     });
  // }

  
  public Login(value:any) {

  console.log(value);
    // const fd:FormData=new FormData();
    // fd.append('email',value.email);
    // fd.append('password',value.password);
   
    this._grooming.loginUser(value)
    .subscribe(
      res=> {
        
       
        console.log(res);
          this._flashMessagesService.show('We are in about component!');
        localStorage.setItem('token',res.token);
        localStorage.setItem('name',res.name);
        localStorage.setItem('lastname',res.lastName);
        localStorage.setItem('member',res.memberSince);
        this._router.navigate(['/']);
        },
      err=>console.log(err)
    )
  }

    
  ngOnInit() {
  
  
  }

 

  // loginUser(){
  //   this._auth.loginUser(this.loginUserData)
  //   .subscribe(
  //     res=> {
  //       console.log(res);
  //       localStorage.setItem('token',res.token);
  //       this._router.navigate(['/home']);
  //       },
  //     err=>console.log(err)
  //   )
  // }
}
