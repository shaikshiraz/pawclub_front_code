import { Component, OnInit,ViewChild } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';
import { CustomerService } from '../customer.service';
import { VenderService } from '../../vender/vender.service';
@Component({
  selector: 'app-c-pet-profile',
  templateUrl: './c-pet-profile.component.html',
  styleUrls: ['./c-pet-profile.component.css']
})
export class CPetProfileComponent implements OnInit {


  constructor() {

   }
    
  ngOnInit() {
    
  }

}
