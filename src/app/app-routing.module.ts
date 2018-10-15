import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CHomeComponent } from './customer/c-home/c-home.component';



const routes:Routes=[
  {path:'',component:CHomeComponent},
  {path:'home',component:CHomeComponent},

];
@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
