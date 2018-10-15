import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-adoption-cart',
  templateUrl: './adoption-cart.component.html',
  styleUrls: ['./adoption-cart.component.css']
})
export class AdoptionCartComponent implements OnInit {

  public myData={};
  Data:{};
  constructor(private _adoptioncart:CustomerService
    ,private _route:ActivatedRoute,private _router:Router) { }

  ngOnInit() {
    const id=this._route.snapshot.queryParamMap.get('id');
    //  console.log(id);
    //  console.log(this._route.snapshot.queryParamMap.getAll('id'));
    //  console.log(this._route.snapshot.queryParamMap.keys);
    //  console.log(id);
   
  
  this._adoptioncart.adoption_cart(id)
  .subscribe(
    (data)=>{
   this.myData=data;
   console.log(this.myData);
    }
  )

  this._adoptioncart.adoption()
  .subscribe(
    (data)=>{
   this.Data=data;
   console.log(this.Data);
    }
  )


  }
   //grooming cart page navigation
   OnClick(id:any){    
    this._router.navigate(['/customer/adoption-cart',id],
    {
      queryParams:{'id':id}
    })
  } 

}
