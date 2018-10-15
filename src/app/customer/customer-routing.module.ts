import { CPaymentComponent } from './c-payment/c-payment.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CHomeComponent } from './c-home/c-home.component';
import { CLoginComponent } from './c-login/c-login.component';
import { CRegisterComponent } from './c-register/c-register.component';
import { CResetPasswordComponent } from './c-reset-password/c-reset-password.component';
import { CProfileComponent } from './c-profile/c-profile.component';
import { CContactUsComponent } from './c-contact-us/c-contact-us.component';
import { CAboutUsComponent } from './c-about-us/c-about-us.component';
import { COpenForumsComponent } from './c-open-forums/c-open-forums.component';
import { CNgoComponent } from './c-ngo/c-ngo.component';
import { CAccomodationComponent } from './c-accomodation/c-accomodation.component';
import { CHomestayComponent } from './c-homestay/c-homestay.component';
import { CKennelComponent } from './c-kennel/c-kennel.component';
import { CAdoptionComponent } from './c-adoption/c-adoption.component';
import { CFoodComponent } from './c-food/c-food.component';
import { CWishListComponent } from './c-wish-list/c-wish-list.component';
import { CPetcareComponent } from './c-petcare/c-petcare.component';
import { CGroomingComponent } from './c-grooming/c-grooming.component';
import { CSwimmingComponent } from './c-swimming/c-swimming.component';
import { CDogWalkingComponent } from './c-dog-walking/c-dog-walking.component';
import { CTrainerComponent } from './c-trainer/c-trainer.component';
import { CTransportationComponent } from './c-transportation/c-transportation.component';
import { CPhotographyComponent } from './c-photography/c-photography.component';
import { AuthGuard } from './auth.guard';
import { CPetProfileComponent } from './c-pet-profile/c-pet-profile.component';
import { CForgotPasswordComponent } from './c-forgot-password/c-forgot-password.component';
import { CartHomeStayComponent } from './cart/cart-home-stay/cart-home-stay.component';
import { CMyOrdersComponent } from './c-my-orders/c-my-orders.component';
import { CAccountSettingComponent } from './c-account-setting/c-account-setting.component';
import { PhotographyCartComponent } from './cart/photography-cart/photography-cart.component';
import { NgoCartComponent } from './cart/ngo-cart/ngo-cart.component';
import { TrainingCartComponent } from './cart/training-cart/training-cart.component';
import { KennelCartComponent } from './cart/kennel-cart/kennel-cart.component';
import { GroomingCartComponent } from './cart/grooming-cart/grooming-cart.component';
import { DogWalkingCartComponent } from './cart/dog-walking-cart/dog-walking-cart.component';
import { TransportationCartComponent } from './cart/transportation-cart/transportation-cart.component';
import { SwimmingCartComponent } from './cart/swimming-cart/swimming-cart.component';
import { FoodCartComponent } from './cart/food-cart/food-cart.component';
import { AdoptionCartComponent } from './cart/adoption-cart/adoption-cart.component';



const routes:Routes=[
  { path: '', redirectTo: 'home', pathMatch: 'full'},
   {path:'home',component:CHomeComponent
  },

  {path:'customer',
  children:[
  {path:'login',component:CLoginComponent}, 
  {path:'register',component:CRegisterComponent},
  {path:'forgotpassword',component:CForgotPasswordComponent},
  {path:'resetpassword',component:CResetPasswordComponent}, 
  {path:'profile',component:CProfileComponent},
  {path:'c-account',component:CAccountSettingComponent},

  {path:'home-stay-cart/:id',component:CartHomeStayComponent},
  {path:'photography-cart/:id',component:PhotographyCartComponent},
  {path:'ngo-cart/:id',component:NgoCartComponent},
  {path:'training-cart/:id',component:TrainingCartComponent},
  {path:'kennel-cart/:id',component:KennelCartComponent},
  {path:'trainer-cart/:id',component:TrainingCartComponent},
  {path:'grooming-cart/:id',component:GroomingCartComponent},
  {path:'dog-walk-cart/:id',component:DogWalkingCartComponent},
  {path:'transportation-cart/:id',component:TransportationCartComponent},
  {path:'swimming-cart/:id',component:SwimmingCartComponent},
  {path:'food-cart/:id',component:FoodCartComponent},
  {path:'adoption-cart/:id',component:AdoptionCartComponent},

  ]
  
  },
  // {path:'register',component:CRegisterComponent},

  
  {path:'petprofile',component:CPetProfileComponent},
  {
    path: 'ngo',
    component: CNgoComponent,
     //canActivate:[AuthGuard]
 },
 {
  path:'food',
  component:CFoodComponent,
  canActivate:[AuthGuard]
 },
  {
    path:'contact-us',
    component:CContactUsComponent
   },

   {
    path:'about-us',
    component:CAboutUsComponent
   },

   {
    path:'open-forum',
    component:COpenForumsComponent
   },

  {
    path: 'services',
 
    children: [
      {
        path: 'ngo',
        component: CNgoComponent,
        canActivate:[AuthGuard]
     },
     {
      path:'c-myorders',
      component:CMyOrdersComponent
     },
     {
      path:'c-photography',
      component:CPhotographyComponent
    },
     
     {
       path:'c-lost',
       component:CAdoptionComponent
     },

    {
      path:'accomodation',
      component:CAccomodationComponent,
      canActivate:[AuthGuard]
    },
      
      
        {path:'c-home-stay',component:CHomestayComponent},
        {path:'c-kennels',component:CKennelComponent},
    
    {
      path:'c-payment',
      component:CPaymentComponent
    },
    
     {
       path:'c-adoption',
       component:CAdoptionComponent
     },
     
     {
      path:'c-food',
      component:CFoodComponent
     },
     {

       path:'c-donation',
      component:CWishListComponent
     },

     {
       path:'c-petcare',
       component:CPetcareComponent
     },
         {path:'c-grooming',component:CGroomingComponent},
         {path:'c-swimming',component:CSwimmingComponent},
         {path:'c-dog-walking',component:CDogWalkingComponent},
         {path:'c-trainer',component:CTrainerComponent},
         {path:'c-transportation',component:CTransportationComponent},
       {path:'c-pet-photography',component:CPhotographyComponent},
   ]
  },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class CustomerRoutingModule { }
