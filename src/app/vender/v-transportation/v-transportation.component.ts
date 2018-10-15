import { Component, OnInit,ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { VenderService } from '../vender.service';
declare var $:any;
@Component({
  selector: 'v-transportation',
  templateUrl: './v-transportation.component.html',
  styleUrls: ['./v-transportation.component.css']
})
export class VTransportationComponent implements OnInit {

  TransportationForm: FormGroup;
  @ViewChild('image') TransportationUserImage;
  TransportationImageFile: File;
  constructor(private _transportation: VenderService, private fb: FormBuilder) {
    this.TransportationForm = this.fb.group({
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

      'Avialable': null,
      //Airport pick /drop service provided
  
      'Airport':false,
      //Cost
      //Small Paws
      'small1': null, 
      'small2': null,
      'small3': null,
      //Medium Paws
      'Medium1': null,
      'Medium2': null,
      'Medium3': null,
      //Large Paws
      'Large1': null,
      'Large2': null,
      'Large3': null,
  
      //Cost per/km
  
      'Costperkm': null,
      //Minimum charges
      'Mincharge': null,
      'Conditions': null,
  
      'bankname': ['', Validators.compose([Validators.required])],
      'accname': ['', Validators.compose([Validators.required])],
      'branch': ['', Validators.compose([Validators.required])],
      'ifsc': ['', Validators.compose([Validators.required])],
      'accno': ['', Validators.compose([Validators.required])],
      'mmid': ['', Validators.compose([Validators.required])],
      'gst': ['', Validators.compose([Validators.required])],
      'accotype': ['', Validators.compose([Validators.required])],
      'writehere': ['',],
      'image': ['', Validators.compose([Validators.required])]
    });
  }



  public Transportation(value) {
    const Image = this.TransportationUserImage.nativeElement;
    if (Image.files && Image.files[0]) {
      this.TransportationImageFile = Image.files[0];
    }
    const ImageFile: File = this.TransportationImageFile;
    //  console.log(ImageFile);

   
    const fd: FormData = new FormData();
    fd.append('name', value.name);
    fd.append('firstname', value.firstname);
    fd.append('lastname', value.lastname);
    fd.append('address1', value.address1);
    fd.append('address2', value.address2);
    fd.append('country', value.country);
    fd.append('state', value.state);
    fd.append('city', value.city);
    fd.append('pincode', value.pincode);
    fd.append('email', value.email);
    fd.append('phoneno', value.phoneno);

  
    fd.append('Avialable', value.Avialable);
      //Airport pick /drop service provided
    fd.append('Airport', value.Airport);
    //Cost
    //Small Paws
    fd.append('small1', value.small1);
    fd.append('small2', value.small2);
    fd.append('small3', value.small3);
  //Medium Paws
    fd.append('Medium1', value.Medium1);
    fd.append('Medium2', value.Medium2);
    fd.append('Medium3', value.Medium3);
      //Large Paws
      fd.append('Large1', value.Large1);
      fd.append('Large2', value.Large2);
      fd.append('Large3', value.Large3);
       //Cost per/km
    fd.append('Costperkm', value.Costperkm);
    //Minimum charges
    fd.append('Mincharge', value.Mincharge);
    fd.append('Conditions', value.Conditions);

   //bank
    fd.append('bankname', value.bankname);
    fd.append('accname', value.accname);
    fd.append('branch', value.branch);
    fd.append('ifsc', value.ifsc);
    fd.append('accno', value.accno);
    fd.append('mmid', value.mmid);
    fd.append('gst', value.gst);
    fd.append('accotype', value.accotype);
    fd.append('writehere', value.writehere);


    fd.append('image', ImageFile, ImageFile.name);
    this._transportation.Transportation(fd)
      .subscribe(
        data => {
          console.log(data);
        }
      );
  }


  ngOnInit() {
    $('.date').datepicker({
      multidate: true,
      format: 'mm/dd/yyyy',
   
    });
  }


}
