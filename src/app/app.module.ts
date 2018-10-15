import { BrowserModule, } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { VenderModule } from './vender/vender.module';
import { CustomerModule } from './customer/customer.module';
import { AdminModule } from './admin/admin.module';
import { CHeaderComponent } from './customer/c-header/c-header.component';
import { CFooterComponent } from './customer/c-footer/c-footer.component';
import { CHomeComponent } from './customer/c-home/c-home.component';
import { CustomerRoutingModule } from './customer/customer-routing.module';
import { HttpClientModule, HttpClient,HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './customer/token-interceptor.service';
import { AuthGuard } from './customer/auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  AuthService,AuthServiceConfig } from 'angular5-social-login';
// import { getAuthServiceConfigs } from './customer/socialloginconfig';
// import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FlashMessagesModule } from 'angular2-flash-messages';
import {
  SocialLoginModule,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from "angular5-social-login";



// Configs 
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("2300056516897407")
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("533011607557-2lsbo139h7d1sgrfq9ml6dauj0p588da.apps.googleusercontent.com")
        },
      ]
  );
  return config;
}

const routes: Routes = [];
@NgModule({
  declarations: [
    AppComponent,
    CHeaderComponent,
    CFooterComponent,
    CHomeComponent,
  
  



  ],
  imports: [
    RouterModule.forChild(routes),
    FlashMessagesModule.forRoot(),
    RouterModule.forRoot([]),
    BrowserModule,
    AppRoutingModule,
    VenderModule,
    CustomerModule,
    AdminModule,
    CustomerRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
     FormsModule,ReactiveFormsModule,CustomFormsModule,
     SocialLoginModule
  
    //  NgMultiSelectDropDownModule.forRoot(),
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [RouterModule],
  providers: [HttpClientModule,AuthGuard,
  {
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true,
    
  },
  
  ,
  {
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  },
   AuthService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
