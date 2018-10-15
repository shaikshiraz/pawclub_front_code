import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation'

import { VHomestayComponent } from './v-homestay/v-homestay.component';
import { VKennelComponent } from './v-kennel/v-kennel.component';
import { VTransportationComponent } from './v-transportation/v-transportation.component';
import { VFoodComponent } from './v-food/v-food.component';
import { VDogWalkingComponent } from './v-dog-walking/v-dog-walking.component';
import { VTrainerComponent } from './v-trainer/v-trainer.component';
import { VHomeMadeProductsComponent } from './v-home-made-products/v-home-made-products.component';
import { VGroomingComponent } from './v-grooming/v-grooming.component';
import { VSwimmingComponent } from './v-swimming/v-swimming.component';
import { VNgoComponent } from './v-ngo/v-ngo.component';
import { VWishListComponent } from './v-wish-list/v-wish-list.component';
import { VLostFoundComponent } from './v-lost-found/v-lost-found.component';
import { VPhotographyComponent } from './v-photography/v-photography.component';
import { VMedicationsComponent } from './v-medications/v-medications.component';
import { VAdoptionComponent } from './v-adoption/v-adoption.component';
import { VAccountSettingComponent } from './v-account-setting/v-account-setting.component';
import { VenderRoutingModule } from './vender-routing.module';
import { VFoundPetComponent } from './v-found-pet/v-found-pet.component';
import { VPetProfileComponent } from './v-pet-profile/v-pet-profile.component';
import { ApendComponent } from './apend/apend.component';
import { VLoginComponent } from './v-login/v-login.component';
import { VForgotPasswordComponent } from './v-forgot-password/v-forgot-password.component';
import { VResetPasswordComponent } from './v-reset-password/v-reset-password.component';
import { VRegisterComponent } from './v-register/v-register.component';
import { VVendersHomeComponent } from './v-venders-home/v-venders-home.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ReactiveValidationModule } from 'angular-reactive-validation';
@NgModule({
  imports: [
    CommonModule,
  VenderRoutingModule,
  FormsModule,
  ReactiveFormsModule,
  CustomFormsModule,
  ReactiveValidationModule,
  NgMultiSelectDropDownModule.forRoot()
  ],
  declarations: [VHomestayComponent, VKennelComponent, VTransportationComponent, VFoodComponent, VDogWalkingComponent, VTrainerComponent, VHomeMadeProductsComponent, VGroomingComponent, VSwimmingComponent, VNgoComponent, VWishListComponent, VLostFoundComponent, VPhotographyComponent, VMedicationsComponent, VAdoptionComponent, VAccountSettingComponent, VFoundPetComponent, VPetProfileComponent, ApendComponent, VLoginComponent, VForgotPasswordComponent, VResetPasswordComponent, VRegisterComponent, VVendersHomeComponent]
})
export class VenderModule { }
