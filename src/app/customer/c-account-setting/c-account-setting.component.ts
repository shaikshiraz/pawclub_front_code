import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-c-account-setting',
  templateUrl: './c-account-setting.component.html',
  styleUrls: ['./c-account-setting.component.css']
})
export class CAccountSettingComponent implements OnInit {

  constructor(private customer_details:CustomerService) { }

  ngOnInit() {
  }

}
