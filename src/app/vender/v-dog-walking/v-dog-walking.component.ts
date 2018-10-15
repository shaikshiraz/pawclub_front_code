import { Component, OnInit,ViewChild } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators,FormArray} from '@angular/forms';
import { VenderService } from '../vender.service';
import '../../../assets/js/walking.js';
declare var $:any;
@Component({
  selector: 'v-dog-walking',
  templateUrl: './v-dog-walking.component.html',
  styleUrls: ['./v-dog-walking.component.css']
})
export class VDogWalkingComponent implements OnInit {
  walkingForm: FormGroup;
  @ViewChild('image') walkingUserImage;
  walkingImageFile: File;
  constructor(private fb: FormBuilder,private _walking:VenderService) {

    this.walkingForm = this.fb.group({
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

      'area': this.fb.array([this.area()]),
      'Breed': this.fb.array([this.area()]),
      // What are the timing that you are available to walk?
                                 'Time1':null,
                                 'Time2':null,
                                 'Time3':null,
                                 'from':null,

                                 //Days and timings that you are available
                                 'DayTime1':null,
                                 'DayTime2':null,
                                 //Area that the service is available
                                //  'area':null,
                                //  'area1':null,
                                //  'area2':null,
                                //  'area3':null,
                                //  'area4':null,
                                //  'area5':null,

                                 //Cost per Day
                                 'costPerDay':false,
                                 //Timings/Cost Per day
                                 //Once a day
                                 //Small Paws
                                  'small1':null,
                                  'small2':null,
                                  'small3':null,
                                 //Twice a day
                                 //Medium Paws
                                 'Medium1':null,
                                 'Medium2':null, 
                                 'Medium3':null,
                                 //Thrice a day
                                 //Large Paws
                                 'Large1':null,
                                 'Large2':null,
                                 'Large3':null,

                                 //Breeds that you walk
                                
                                //  'Breed1':null,
                                //  'Breed2':null,
                                //  'Breed3':null,
                                //  'Breed4':null,
                                //  'Breed5':null,

                                 'selectTime':null,
                                 'cost':null,
                                 'MaxBreed':null,
                                 'Conditions':null,

      'bankname': ['', Validators.compose([Validators.required])],
      'accname': ['', Validators.compose([Validators.required])],
      'branch': ['', Validators.compose([Validators.required])],
      'ifsc': ['', Validators.compose([Validators.required])],
      'accno': ['', Validators.compose([Validators.required])],
      'mmid': ['', Validators.compose([Validators.required])],
      'gst': ['', Validators.compose([Validators.required])],
      'accotype': ['', Validators.compose([Validators.required])],
      'writehere': ['',],
      // 'dog':[''],
      // 'service':[''],

      'image': ['',Validators.compose([Validators.required])]
    });
   }

    public Walking(value) {
    const Image = this.walkingUserImage.nativeElement;
    if (Image.files && Image.files[0]) {
      this.walkingImageFile = Image.files[0];
    }
    const ImageFile: File = this.walkingImageFile;
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
       // What are the timing that you are available to walk?
    fd.append('Time1',value.TimeTime1);
    fd.append('Time2',value.TimeTime2);
    fd.append('Time3',value.TimeTime3);
    fd.append('from',value.from);
 //Days and timings that you are available
    fd.append('DayTime1',value.DayTime1);
    fd.append('DayTime2',value.DayTime2);
        //Area that the service is available
    fd.append('area',JSON.stringify (value.area));
    // fd.append('area1',value.area1);
    // fd.append('area2',value.area2);
    // fd.append('area3',value.area3);
    // fd.append('area4',value.area4);
    // fd.append('area5',value.area5);
    //Cost per Day
    fd.append('costPerDay',value.costPerDay);
    //Timings/Cost Per day
    //Once a day
    //Small Paws
    fd.append('small1',value.small1);
    fd.append('small2',value.small2);
    fd.append('small3',value.small3);
    //Twice a day
    //Medium Paws
    fd.append('Medium1',value.Medium1);
    fd.append('Medium2',value.Medium2);
    fd.append('Medium3',value.Medium);
    //Thrice a day
    //Large Paws
    fd.append('Large1',value.Large1);
    fd.append('Large2',value.Large2);
    fd.append('Large3',value.Large3);
    
    //Breeds that you walk
    fd.append('Breed',JSON.stringify(value.Breed));
    // fd.append('Breed1',value.Breed1);
    // fd.append('Breed2',value.Breed2);
    // fd.append('Breed3',value.Breed3);
    // fd.append('Breed4',value.Breed4);
    // fd.append('Breed5',value.Breed5);
   

    fd.append('selectTime',value.selectTime);
    fd.append('cost',value.cost);
    fd.append('MaxBreed',value.MaxBreed);
    fd.append('Conditions',value.Conditions);
  
    
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
    this._walking.walking(fd)
    .subscribe(
      data=>{
        console.log(data);
      }
    );

  }

  ngOnInit() {
    $('.date').datepicker({
      multidate: true,
      format: 'dd-mm-yyyy',
   
    });
   
    
  }
  area(): FormGroup {

    return this.fb.group({
      'area': [''],
    });

  }

  Breed(): FormGroup {

    return this.fb.group({
      'Breed':[''],
    });

  }
  addField(ind) {
    const fArr = this.walkingForm.get('area') as FormArray;
    fArr.insert(ind + 1, this.area());
  }

  removeField(ind) {
    const fArr = this.walkingForm.get('area') as FormArray;
    fArr.removeAt(ind);
  }

  addField1(ind) {
    const fArr = this.walkingForm.get('Breed') as FormArray;
    fArr.insert(ind + 1, this.Breed());
  }

  removeField1(ind) {
    const fArr = this.walkingForm.get('Breed') as FormArray;
    fArr.removeAt(ind);
  }

}
