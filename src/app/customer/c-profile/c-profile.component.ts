import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'c-profile',
  templateUrl: './c-profile.component.html',
  styleUrls: ['./c-profile.component.css']
})
export class CProfileComponent implements OnInit {

  constructor(private _auth:CustomerService) { }
  get Firstname(): any {
    return localStorage.getItem('name');
}
get Lastname(): any {
  return localStorage.getItem('lastname');
}

get MemberSince(): any {
  return localStorage.getItem('member');
}
  ngOnInit() {
  }

}
