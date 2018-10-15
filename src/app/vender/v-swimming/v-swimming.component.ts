import { Component, OnInit,ViewChild } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';
import { VenderService } from '../vender.service';
@Component({
  selector: 'v-swimming',
  templateUrl: './v-swimming.component.html',
  styleUrls: ['./v-swimming.component.css']
})
export class VSwimmingComponent implements OnInit {

  SwimmingForm: FormGroup;
  @ViewChild('image') SwimmingUserImage;
  SwimmingImageFile: File;
  constructor(private fb: FormBuilder,private _swimming:VenderService) {

    this.SwimmingForm = this.fb.group({
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


      
      'operationalDays':{type:String},
      //per meal cost
      'small':null,
      'Medium' :null,
      'Large':null,

      'available':null,
      //time
      'From':null,
      'To':null,
      //Instance conformation
      'conformation' :false, 
      'Day':null,
      'Price':null,


     // Provide Transportaion To and From the pool
     'Transportaion':false, 
     
     'chargePerkm':null,
     'minCharge':null,
     'PickUp':null,
     'Drop':null,
    // Terms and Conditions*
    'Conditions':null,
       
      //bank
      'bankname': ['', Validators.compose([Validators.required])],
      'accname': ['', Validators.compose([Validators.required])],
      'branch': ['', Validators.compose([Validators.required])],
      'ifsc': ['', Validators.compose([Validators.required])],
      'accno': ['', Validators.compose([Validators.required])],
      'mmid': ['', Validators.compose([Validators.required])],
      'gst': ['', Validators.compose([Validators.required])],
      'accotype': ['', Validators.compose([Validators.required])],
      'writehere': ['',],
      'image': ['',Validators.compose([Validators.required])]
      
        });
   }

    public Lost(value) {
    const Image = this.SwimmingUserImage.nativeElement;
    if (Image.files && Image.files[0]) {
      this.SwimmingImageFile = Image.files[0];
    }
    const ImageFile: File = this.SwimmingImageFile;
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

    fd.append('operationalDays',value.operationalDays);
     //per meal cost
    fd.append('small',value.small);
    fd.append('Medium',value.Medium);
    fd.append('Large',value.Large);

    //Date available with time slots
    fd.append('available',value.available);
     //time
    fd.append('From',value.From);
    fd.append('To',value.To);
        //Instance conformation
    fd.append('conformation',value.conformation);
    fd.append('Day',value.Day);
    fd.append('Price',value.Price);
       // Provide Transportaion To and From the pool
    fd.append('Transportaion',value.Transportaion);
    fd.append('chargePerkm',value.chargePerkm);
    fd.append('minCharge',value.minCharge);
    fd.append('PickUp',value.PickUp);
    fd.append('Drop',value.Drop);

   //bank

   fd.append('bankname',value.bankname);
    fd.append('accname',value.accname);
    fd.append('branch',value.branch);
    fd.append('ifsc',value.ifsc);
    fd.append('accno',value.accno);
    fd.append('mmid',value.mmid);
    fd.append('gst',value.gst);
    fd.append('accotype',value.accotype);
    fd.append('writehere',value.writehere);
  


    fd.append('image',ImageFile,ImageFile.name);

    this._swimming.swimming(fd)
    .subscribe(
      data=>{
        console.log(data);
      }
    );

  }

  ngOnInit() {

  }


}
