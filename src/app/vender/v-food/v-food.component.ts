import { Component, OnInit,ViewChild } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators,FormArray} from '@angular/forms';
import { VenderService } from '../vender.service';
// import '../../../assets/js/food.js';
declare var $:any;
@Component({
  selector: 'v-food',
  templateUrl: './v-food.component.html',
  styleUrls: ['./v-food.component.css']
})
export class VFoodComponent implements OnInit {
  FoodForm: FormGroup;
  @ViewChild('image') FoodUserImage;
  FoodImageFile: File;
  constructor(private fb: FormBuilder,private _food:VenderService) {

    this.FoodForm = this.fb.group({
      'name': ['', Validators.compose([Validators.required])],
      'firstname': ['', Validators.compose([Validators.required])],
      'lastname': ['', Validators.compose([Validators.required])],
      'address1': ['', Validators.compose([Validators.required])],
      'address2': ['', Validators.compose([Validators.required])],
      'country': ['', Validators.compose([Validators.required])],
      'state': ['', Validators.compose([Validators.required])],
      'city': ['', Validators.compose([Validators.required])],
      'pincode': ['', Validators.compose([Validators.required])],
      'email': ['', Validators.compose([Validators.required])],
      'phoneno': ['', Validators.compose([Validators.required])],

     'ServiceArea': this.fb.array([this.ServiceArea1()]),
      'Refrigeration': false,
      'DeliverySchedule': null,
      'DelivaryTimings': null,
      'order': false,
      'CostPerQuantity': null,
      'Delivery1': this.fb.array([this.Delivery1()]),
      

      'bankname': ['', Validators.compose([Validators.required])],
      'accname': ['', Validators.compose([Validators.required])],
      'branch': ['', Validators.compose([Validators.required])],
      'ifsc': ['', Validators.compose([Validators.required])],
      'accno': ['', Validators.compose([Validators.required])],
      'mmid': ['', Validators.compose([Validators.required])],
      'gst': ['', Validators.compose([Validators.required])],
      'accotype': ['', Validators.compose([Validators.required])],
      'writehere': ['',],
      'dog':[''],
      'service':[''],

      'image': ['',Validators.compose([Validators.required])]
    });
   }

    public Food(value) {
    const Image = this.FoodUserImage.nativeElement;
    if (Image.files && Image.files[0]) {
      this.FoodImageFile = Image.files[0];
    }
    const ImageFile: File = this.FoodImageFile;
    //  console.log(ImageFile);

    const fd:FormData=new FormData();
    fd.append('name',value.name);
    fd.append('firstname',value.firstname);
    fd.append('lastname',value.lastname);
    fd.append('address1',value.address1);
    fd.append('address2',value.address2);
    fd.append('country',value.country);
    fd.append('state',value.state);
    fd.append('city',value.city);
    fd.append('pincode',value.pincode);
    fd.append('email',value.email);
    fd.append('phoneno',value.phoneno);
    fd.append('ServiceArea',JSON.stringify(value.ServiceArea));
    fd.append('Refrigeration',value.Refrigeration);
    fd.append('DeliverySchedule',value.DeliverySchedule);
    fd.append('DelivaryTimings',value.DelivaryTimings);
    fd.append('order',value.order);
    fd.append('CostPerQuantity',value.CostPerQuantity);

    // fd.append('area',JSON.stringify(value.area));
    // fd.append('food_INR',JSON.stringify(value.food_INR));
    fd.append('Delivery1',value.Delivery1);

    fd.append('bankname',value.bankname);
    fd.append('accname',value.accname);
    fd.append('branch',value.branch);
    fd.append('ifsc',value.ifsc);
    fd.append('accno',value.accno);
    fd.append('mmid',value.mmid);
    fd.append('gst',value.gst);
    fd.append('accotype',value.accotype);
    fd.append('writehere',value.writehere);
    // fd.append('dog',value.dog);
    // fd.append('service',value.service);


    fd.append('image',ImageFile,ImageFile.name);
    this._food.food(fd)
    .subscribe(
      data=>{
        console.log(data);
      }
    );

  }

  ngOnInit() {
    
  }
  ServiceArea1(): FormGroup {

    return this.fb.group({
      'ServiceArea': [''],
    });

  }

  Delivery1(): FormGroup {

    return this.fb.group({
      'area': [''],
      'food_INR': [''],
    });

  }
  addField(ind) {
    const fArr = this.FoodForm.get('ServiceArea') as FormArray;
    fArr.insert(ind + 1, this.ServiceArea1());
  }

  removeField(ind) {
    const fArr = this.FoodForm.get('ServiceArea') as FormArray;
    fArr.removeAt(ind);
  }

  addField1(ind) {
    const fArr = this.FoodForm.get('Delivery1') as FormArray;
    fArr.insert(ind + 1, this.Delivery1());
  }

  removeField1(ind) {
    const fArr = this.FoodForm.get('Delivery1') as FormArray;
    fArr.removeAt(ind);
  }


}
