import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';


import { CHomestayComponent } from './c-homestay/c-homestay.component';
import { CAccomodationComponent } from './c-accomodation/c-accomodation.component';
import { CKennelComponent } from './c-kennel/c-kennel.component';
import { CPetcareComponent } from './c-petcare/c-petcare.component';
import { CAdoptionComponent } from './c-adoption/c-adoption.component';
import { CGroomingComponent } from './c-grooming/c-grooming.component';
import { CSwimmingComponent } from './c-swimming/c-swimming.component';
import { CDogWalkingComponent } from './c-dog-walking/c-dog-walking.component';
import { CTrainerComponent } from './c-trainer/c-trainer.component';
import { CTransportationComponent } from './c-transportation/c-transportation.component';
import { CPhotographyComponent } from './c-photography/c-photography.component';
import { CNgoComponent } from './c-ngo/c-ngo.component';
import { CWishListComponent } from './c-wish-list/c-wish-list.component';
import { CProfileComponent } from './c-profile/c-profile.component';
import { COpenForumsComponent } from './c-open-forums/c-open-forums.component';
import { CCustomerPageComponent } from './c-customer-page/c-customer-page.component';
import { CVendersListPageComponent } from './c-venders-list-page/c-venders-list-page.component';
import { CMyOrdersComponent } from './c-my-orders/c-my-orders.component';
import { CLoginComponent } from './c-login/c-login.component';
import { CRegisterComponent } from './c-register/c-register.component';
import { CResetPasswordComponent } from './c-reset-password/c-reset-password.component';
import { CWhyUsComponent } from './c-why-us/c-why-us.component';
import { CAboutUsComponent } from './c-about-us/c-about-us.component';
import { CContactUsComponent } from './c-contact-us/c-contact-us.component';
import { CFoodComponent } from './c-food/c-food.component';
import { Routes, RouterModule } from '@angular/router';
import { CustomerRoutingModule } from './customer-routing.module';
import { CPaymentComponent } from './c-payment/c-payment.component';
import { CPetProfileComponent } from './c-pet-profile/c-pet-profile.component';
import { CForgotPasswordComponent } from './c-forgot-password/c-forgot-password.component';
import { CartHomeStayComponent } from './cart/cart-home-stay/cart-home-stay.component';
import { CRefundComponent } from './c-refund/c-refund.component';
import { CPolicyComponent } from './c-policy/c-policy.component';
import { CTermsConditionComponent } from './c-terms-condition/c-terms-condition.component';
import { CAccountSettingComponent } from './c-account-setting/c-account-setting.component';
import { PhotographyCartComponent } from './cart/photography-cart/photography-cart.component';
import { NgoCartComponent } from './cart/ngo-cart/ngo-cart.component';
import { GroomingCartComponent } from './cart/grooming-cart/grooming-cart.component';
import { DogWalkingCartComponent } from './cart/dog-walking-cart/dog-walking-cart.component';
import { KennelCartComponent } from './cart/kennel-cart/kennel-cart.component';
import { SwimmingCartComponent } from './cart/swimming-cart/swimming-cart.component';
import { TrainingCartComponent } from './cart/training-cart/training-cart.component';
import { TransportationCartComponent } from './cart/transportation-cart/transportation-cart.component';
import { FoodCartComponent } from './cart/food-cart/food-cart.component';
import { AdoptionCartComponent } from './cart/adoption-cart/adoption-cart.component';
import { FoundCartComponent } from './cart/found-cart/found-cart.component';
import { LostCartComponent } from './cart/lost-cart/lost-cart.component';






const routes: Routes = [];

@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule,
    RouterModule.forChild(routes),
    FormsModule,ReactiveFormsModule

  ],
  exports: [RouterModule],

  declarations: [CHomestayComponent, CAccomodationComponent, CKennelComponent,
    CPetcareComponent, CAdoptionComponent, CGroomingComponent, CSwimmingComponent,
    CDogWalkingComponent, CTrainerComponent, CTransportationComponent, 
    CPhotographyComponent, CNgoComponent, CWishListComponent, CProfileComponent,
     COpenForumsComponent, CCustomerPageComponent, CVendersListPageComponent,
      CMyOrdersComponent, CLoginComponent, CRegisterComponent, CResetPasswordComponent,
       CWhyUsComponent, CAboutUsComponent, CContactUsComponent, CFoodComponent, 
       CPaymentComponent, CPetProfileComponent, CForgotPasswordComponent, CartHomeStayComponent, CRefundComponent, CPolicyComponent, CTermsConditionComponent, CAccountSettingComponent, PhotographyCartComponent, NgoCartComponent, GroomingCartComponent, DogWalkingCartComponent,KennelCartComponent, SwimmingCartComponent, TrainingCartComponent, TransportationCartComponent, FoodCartComponent, AdoptionCartComponent, FoundCartComponent, LostCartComponent, ]
})
export class CustomerModule { }
