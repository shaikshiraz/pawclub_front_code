import { Component, OnInit,ViewChild } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';
import { VenderService } from '../vender.service';

@Component({
  selector: 'v-home-made-products',
  templateUrl: './v-home-made-products.component.html',
  styleUrls: ['./v-home-made-products.component.css']
})
export class VHomeMadeProductsComponent implements OnInit {

  HomeMadeForm: FormGroup;
  @ViewChild('image') HomeMadeUserImage;
  HomeMadeImageFile: File;
  constructor(private fb: FormBuilder,private _homemade:VenderService) { 
    
    this.HomeMadeForm = this.fb.group({
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
        
       
      'Conditions':null,

      
      

      


      'bankname': ['', Validators.compose([Validators.required])],
      'accname': ['', Validators.compose([Validators.required])],
      'branch': ['', Validators.compose([Validators.required])],
      'ifsc': ['', Validators.compose([Validators.required])],
      'accno': ['', Validators.compose([Validators.required])],
      'mmid': ['', Validators.compose([Validators.required])],
      'gst': ['', Validators.compose([Validators.required])],
      'accotype': ['', Validators.compose([Validators.required])],
      'writehere': null,
      'image': ['',Validators.compose([Validators.required])]
    });
  }

  

  public HomeMade(value) {
    const Image = this.HomeMadeUserImage.nativeElement;
    if (Image.files && Image.files[0]) {
      this.HomeMadeImageFile = Image.files[0];
    }
    const ImageFile: File = this.HomeMadeImageFile;
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
    this._homemade.homemade(fd)
    .subscribe(
      data=>{
        console.log(data);
      }
    );
  }

    
  ngOnInit() {
  }
}
