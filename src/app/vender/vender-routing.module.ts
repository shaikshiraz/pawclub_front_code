import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { VNgoComponent } from './v-ngo/v-ngo.component';
import { VHomestayComponent } from './v-homestay/v-homestay.component';
import { VKennelComponent } from './v-kennel/v-kennel.component';
import { VAdoptionComponent } from './v-adoption/v-adoption.component';
import { VTrainerComponent } from './v-trainer/v-trainer.component';
import { VDogWalkingComponent } from './v-dog-walking/v-dog-walking.component';
import { VGroomingComponent } from './v-grooming/v-grooming.component';
import { VFoodComponent } from './v-food/v-food.component';
import { VHomeMadeProductsComponent } from './v-home-made-products/v-home-made-products.component';
import { VLostFoundComponent } from './v-lost-found/v-lost-found.component';
import { VSwimmingComponent } from './v-swimming/v-swimming.component';
import { VTransportationComponent } from './v-transportation/v-transportation.component';
import { VWishListComponent } from './v-wish-list/v-wish-list.component';
import { VMedicationsComponent } from './v-medications/v-medications.component';
import { VFoundPetComponent } from './v-found-pet/v-found-pet.component';
import { VPetProfileComponent } from './v-pet-profile/v-pet-profile.component';
import { VPhotographyComponent } from './v-photography/v-photography.component';
import { ApendComponent } from './apend/apend.component';
import { VAccountSettingComponent } from './v-account-setting/v-account-setting.component';
import { VLoginComponent } from './v-login/v-login.component';
import { VForgotPasswordComponent } from './v-forgot-password/v-forgot-password.component';
import { VRegisterComponent } from './v-register/v-register.component';
import { VResetPasswordComponent } from './v-reset-password/v-reset-password.component';
import { VVendersHomeComponent } from './v-venders-home/v-venders-home.component';



const routes: Routes = [
  {
    path:'venders',
    children:[
      {path:'apend',component:ApendComponent},
      {path:'v-petprofile',component:VPetProfileComponent},
      {path:'v-ngo',component:VNgoComponent},
      {path:'v-home-stay',component:VHomestayComponent},
      {path:'v-kennel',component:VKennelComponent},
      {path:'v-adoption',component:VAdoptionComponent},
      {path:'v-trainer',component:VTrainerComponent},
      {path:'v-dog-walking',component:VDogWalkingComponent},
      {path:'v-grooming',component:VGroomingComponent},
      {path:'v-food',component:VFoodComponent},
      {path:'v-home-products',component:VHomeMadeProductsComponent},
      // {path:'v-out-door',component:VOutDoorActivityComponent},
      {path:'v-lost-found',component:VLostFoundComponent},
      {path:'v-found-pet',component:VFoundPetComponent},
      {path:'v-swimming-pool',component:VSwimmingComponent},
      {path:'v-transportation',component:VTransportationComponent},
      {path:'v-wish-list',component:VWishListComponent},
      {path:'v-med',component:VMedicationsComponent},
      {path:'v-photo',component:VPhotographyComponent},
      {path:'v-account-setting',component:VAccountSettingComponent},
      {path:'login',component:VLoginComponent},
      {path:'forgotpassword',component:VForgotPasswordComponent},
      {path:'register',component:VRegisterComponent},
      {path:'reset',component:VResetPasswordComponent},
      {path:'venders-home',component:VVendersHomeComponent}

    ], 
  },
];
@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class VenderRoutingModule { }
