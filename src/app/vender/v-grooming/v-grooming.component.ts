import { Component, OnInit,ViewChild } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators,FormArray} from '@angular/forms';
import { VenderService } from '../vender.service';

@Component({
  selector: 'v-grooming',
  templateUrl: './v-grooming.component.html',
  styleUrls: ['./v-grooming.component.css']
})
export class VGroomingComponent implements OnInit {

  GroomingForm: FormGroup;
  @ViewChild('image') GroomingUserImage;
  GroomingImageFile: File;
  constructor(private _grooming:VenderService,private fb: FormBuilder) { 
    
    this.GroomingForm = this.fb.group({
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
      
      'serviceCost':false,
       //Bath
       'small':null,
       'medium':null,
       'large':null,
      //Haircut
       'small1':null,
       'medium1':null,
       'large1':null,
      //Nailcut
       'small2':null,
       'medium2':null,
       'large2':null,
       // Styling
       'small3':null,
       'medium3':null,
       'large3':null,
       //Spa services
       'small4':null,
       'medium4':null,
       'large4':null,
       //other
       'small5':null,
       'medium5':null,
       'large5':null,

       'otherServices':null,

// Do you provide these services at the customers place?
            
'services' :false,              
'ServiceArea': this.fb.array([this.ServiceArea1()]),
'ExtraCharge':false,
'HowMuch':null,  
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
      'image': ['',Validators.compose([Validators.required])]
    });
  }

  

  public Grooming(value) {
    const Image = this.GroomingUserImage.nativeElement;
    if (Image.files && Image.files[0]) {
      this.GroomingImageFile = Image.files[0];
    }
    const ImageFile: File = this.GroomingImageFile;
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
   
     //Bath
    fd.append('small',value.small);
    fd.append('medium',value.medium);
    fd.append('large',value.large);
     //Haircut
    fd.append('small1',value.small1);
    fd.append('medium1',value.medium1);
    fd.append('large1',value.large1);


    fd.append('serviceCost',value.serviceCost);

    fd.append('small2',value.small2);
    fd.append('medium2',value.medium2);
    fd.append('large2',value.large2);
      // Styling
    fd.append('small3',value.small3);
    fd.append('medium3',value.medium3);
    fd.append('large3',value.large3);
     //Spa services
    fd.append('small4',value.small4);
    fd.append('medium4',value.medium4);
    fd.append('large4',value.large4);
 //other  
    fd.append('small5',value.small5);
    fd.append('medium5',value.medium5);
    fd.append('large5',value.large5);
// Do you provide these services at the customers place?
fd.append('services',value.services);
fd.append('ServiceArea',JSON.stringify(value.ServiceArea));
fd.append('ExtraCharge',value.ExtraCharge);
fd.append('HowMuch',value.HowMuch);
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
  


    fd.append('image',ImageFile,ImageFile.name);
    this._grooming.grooming(fd)
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
  addField(ind) {
    const fArr = this.GroomingForm.get('ServiceArea') as FormArray;
    fArr.insert(ind + 1, this.ServiceArea1());
  }

  removeField(ind) {
    const fArr = this.GroomingForm.get('ServiceArea') as FormArray;
    fArr.removeAt(ind);
  }






}
