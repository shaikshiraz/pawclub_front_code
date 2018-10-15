import { Component, OnInit,ViewChild } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators,FormArray} from '@angular/forms';
import { VenderService } from '../vender.service';
declare var $: any;
@Component({
  selector: 'v-lost-found',
  templateUrl: './v-lost-found.component.html',
  styleUrls: ['./v-lost-found.component.css']
})
export class VLostFoundComponent implements OnInit {
  dropdownList1 = [];
  dropdownList2 = [];
  dropdownList3 = [];
  selectedItems = [];
  dropdownSettings = {};

  LostForm: FormGroup;
  @ViewChild('image') LostUserImage;
  LostImageFile: File;
  constructor(private fb: FormBuilder,private _lost:VenderService) {

    this.LostForm = this.fb.group({
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

      'small_dog': this.fb.array([this.Dog1()]),
      'medium_dog': this.fb.array([this.Dog1()]),
      'large_dog': this.fb.array([this.Dog1()]),

      'cat1': this.fb.array([this.cat1()]),
      
      'Other1': this.fb.array([this.Other1()]),

        //dog
        'noofpets': null,
        'Typeofpets': null,
        'breed': null,
        'gender': null,
        'age': null,
        //cat
        'noofpets6': null,
        'Typeofpets6': null,
        'breed6': null,
        'gender6': null,
        'age6': null,
          //others
          'noofpets12': null,
          'Typeofpets12': null,
          'breed12': null,
          'gender12': null,
          'age12': null,
           
          'LostDate':null,
          'lostLocation':null,
          'landmark':null,
          // 'medical' :null,   
          'requires':null,
          'writehere': ['',],
          'image': ['',Validators.compose([Validators.required])]
      
        });
   }

    public Lost(value) {
    const Image = this.LostUserImage.nativeElement;
    if (Image.files && Image.files[0]) {
      this.LostImageFile = Image.files[0];
    }
    const ImageFile: File = this.LostImageFile;
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
   

     //dog
     fd.append('small_dog',JSON.stringify(value.small_dog));
   fd.append('medium_dog',JSON.stringify(value.medium_dog));
   fd.append('large_dog',JSON.stringify(value.large_dog));
   
   fd.append('cat1',JSON.stringify(value.cat1));
   fd.append('Other1',JSON.stringify(value.Other1));
 
     fd.append('noofpets',value.noofpets);
     // fd.append('max',value.max);
     fd.append('Typeofpets',JSON.stringify(value.Typeofpets));
     fd.append('breed',JSON.stringify(value.breed));   
     fd.append('gender',value.gender);
     fd.append('age',value.pickdrop);
     //cat
     fd.append('noofpets6',value.noofpets6);
     // fd.append('max6',value.max6);
     fd.append('Typeofpets6',value.Typeofpets6);
     fd.append('breed6',value.breed6);   
     fd.append('gender6',value.gender6);
     fd.append('age6',value.age6);
     //others
     fd.append('noofpets12',value.noofpets12);
     // fd.append('max12',value.max12);
     fd.append('Typeofpets12',value.Typeofpets12);
     fd.append('breed12',value.breed12);   
     fd.append('gender12',value.gender12);
     fd.append('age12',value.age12);

     fd.append('LostDate',value.foundDate);
      fd.append('lostLocation',value.foundLocation);
     fd.append('landmark',value.landmark);
    //  fd.append('medical',value.medical);   
     fd.append('requires',value.requires);
     fd.append('writehere',value.writehere);
        
    fd.append('image',ImageFile,ImageFile.name);
    this._lost.lost(fd)
    .subscribe(
      data=>{
        console.log(data);
      }
    );

  }

  ngOnInit() {
    this.dropdownList1 = [
      { item_id: 1, item_text: 'Male' },
      { item_id: 2, item_text: 'Female' },
      { item_id: 3, item_text: 'Male' },
      { item_id: 4, item_text: 'Female' },
      { item_id: 5, item_text: 'Male' },
      { item_id: 6, item_text: 'Female' },

 
    ];
    this.dropdownList2 = [
      { item_id: 1, item_text: 'Male' },
      { item_id: 2, item_text: 'Female' },
      { item_id: 3, item_text: 'Male' },
      { item_id: 4, item_text: 'Female' },
      { item_id: 5, item_text: 'Male' },
      { item_id: 6, item_text: 'Female' },

 
    ];
    this.dropdownList3 = [
      { item_id: 1, item_text: 'Male' },
      { item_id: 2, item_text: 'Female' },
      { item_id: 3, item_text: 'Male' },
      { item_id: 4, item_text: 'Female' },
      { item_id: 5, item_text: 'Male' },
      { item_id: 6, item_text: 'Female' },

 
    ];
    
    this.dropdownSettings = {
      singleSelection: false,
       idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

  }


  Dog1(): FormGroup {

    return this.fb.group({
      'Typeofpets': [''],
      'breed':[''],
    });

  }
  
  cat1(): FormGroup {

    return this.fb.group({
      'gender': [''],
      'breed':[''],
    });

  }

  Other1(): FormGroup {

    return this.fb.group({
      'Typeofpets': [''],
      'breed':[''],
      'noofpets': [''],
      'gender':[''],
      'age':[''],
    });

  }


  Other2(): FormGroup {

    return this.fb.group({
      'Typeofpets': [''],
      'breed':[''],
      'noofpets': [''],
      'gender':[''],
      'age':[''],
    });

  }

  addField(ind) {
    const fArr = this.LostForm.get('cat1') as FormArray;
    fArr.insert(ind + 1, this.cat1());
  }
  addField1(ind) {
    const fArr = this.LostForm.get('Other1') as FormArray;
    fArr.insert(ind + 1, this.Other1());
  }

  removeField(ind) {
    const fArr = this.LostForm.get('cat1') as FormArray;
    fArr.removeAt(ind);
  }
  removeField1(ind) {
    const fArr = this.LostForm.get('Other1') as FormArray;
    fArr.removeAt(ind);
  }
}
