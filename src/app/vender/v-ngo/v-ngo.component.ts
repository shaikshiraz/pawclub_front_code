import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators,FormArray } from '@angular/forms';
import { VenderService } from '../vender.service';
import { Router } from '@angular/router';


@Component({
  selector: 'v-ngo',
  templateUrl: './v-ngo.component.html',
  styleUrls: ['./v-ngo.component.css']
})
export class VNgoComponent implements OnInit {
  fValue: String;

  msg:string=null;
  NgoForm: FormGroup;
  @ViewChild('image') NgoUserImage;
  NgoImageFile: File;
  constructor(private fb: FormBuilder, private _ngos: VenderService,private router:Router) {

    // this.NgoForm = this.fb.group({
    //   'name': ['', Validators.compose([Validators.required])],
    //   'firstname': ['', Validators.compose([Validators.required])],
    //   'lastname': ['', Validators.compose([Validators.required])],
    //   'address1': ['', Validators.compose([Validators.required])],
    //   'address2': ['', Validators.compose([Validators.required])],
    //   'country': ['', Validators.compose([Validators.required])],
    //   'state': ['', Validators.compose([Validators.required])],
    //   'city': ['', Validators.compose([Validators.required])],
    //   'pincode': ['', Validators.compose([Validators.required])],
    //   'email': ['', Validators.compose([Validators.required])],
    //   'phoneno': ['', Validators.compose([Validators.required])],

    //   'require': null,
    //   'website': null,
    //   'AboutNgo': null,
    //   'Conditions': null,

    //   'bankname': ['', Validators.compose([Validators.required])],
    //   'accname': ['', Validators.compose([Validators.required])],
    //   'branch': ['', Validators.compose([Validators.required])],
    //   'ifsc': ['', Validators.compose([Validators.required])],
    //   'accno': ['', Validators.compose([Validators.required])],
    //   'mmid': ['', Validators.compose([Validators.required])],
    //   'gst': ['', Validators.compose([Validators.required])],
    //   'accotype': ['', Validators.compose([Validators.required])],
    //   'writehere': null,
    //   'image': ['', Validators.compose([Validators.required])]
    // });
  }



 

  get f() { return this.NgoForm.controls; }
  ngOnInit() {
    this.NgoForm = this.fb.group({
      'name': ['Test Dynamic Form', [Validators.required]],
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
  
        'require': null,
        'website': null,
        'AboutNgo': null,
        'Conditions': null,
  
        'bankname': ['', Validators.compose([Validators.required])],
        'accname': ['', Validators.compose([Validators.required])],
        'branch': ['', Validators.compose([Validators.required])],
        'ifsc': ['', Validators.compose([Validators.required])],
        'accno': ['', Validators.compose([Validators.required])],
        'mmid': ['', Validators.compose([Validators.required])],
        'gst': ['', Validators.compose([Validators.required])],
        'accotype': ['', Validators.compose([Validators.required])],
        'writehere': null,
        'image': ['', Validators.compose([Validators.required])],
      'row_dynamic': this.fb.array([this.generateDynamicItems()])
    });
  }

   public Ngo(value) {
    const Image = this.NgoUserImage.nativeElement;
    if (Image.files && Image.files[0]) {
      this.NgoImageFile = Image.files[0];
    }
    const ImageFile: File = this.NgoImageFile;
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




    fd.append('require', value.require);
    fd.append('website', value.website);
    fd.append('AboutNgo', value.AboutNgo);
    fd.append('Conditions', value.Conditions);


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
    this._ngos.ngo(fd)
      .subscribe(
        data => {
          console.log(data);
        this.router.navigate(['/venders/v-home-stay']);
        //  this.msg="you are successfully submitted form";
        alert("you are successfully submitted form")
        }
      );
  }

  generateDynamicItems(): FormGroup {
    return this.fb.group({
      'gender': [''],
      'age': [''],
      'TypeOfPet':[''],
      'noofpet':[''],
    });

  }

  getItems(val) {
    console.log(val);
    return 'OK';
  }

  submitForm() {
    this.fValue = JSON.stringify(this.NgoForm.value)
  }

  addField(ind) {
    const fArr = this.NgoForm.get('row_dynamic') as FormArray;
    fArr.insert(ind + 1, this.generateDynamicItems());
  }

  removeField(ind) {
    const fArr = this.NgoForm.get('row_dynamic') as FormArray;
    fArr.removeAt(ind);
  }
  }


