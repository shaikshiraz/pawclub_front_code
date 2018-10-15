import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../customer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dog-walking-cart',
  templateUrl: './dog-walking-cart.component.html',
  styleUrls: ['./dog-walking-cart.component.css']
})
export class DogWalkingCartComponent implements OnInit {
  public myData={};
  constructor(private _dog_walk_cart:CustomerService,private _route:ActivatedRoute) { }

  ngOnInit() {
        const id=this._route.snapshot.queryParamMap.get('id');
    //  console.log(id);
    //  console.log(this._route.snapshot.queryParamMap.getAll('id'));
    //  console.log(this._route.snapshot.queryParamMap.keys);
    //  console.log(id);
   
  
  this._dog_walk_cart.dog_walking_cart(id)
  .subscribe(
    (data)=>{
   this.myData=data;
   console.log(this.myData);
    }
  )
  }

}
