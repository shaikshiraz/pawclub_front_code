import { Component, OnInit,ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder,FormsModule,FormGroup,FormControl,FormArray} from '@angular/forms';
import { VenderService } from '../vender.service';
// import { $ } from 'protractor';
import {Validators} from 'angular-reactive-validation';
import { min } from 'rxjs/operators';
declare var $:any;
@Component({
  selector: 'v-homestay',
  templateUrl: './v-homestay.component.html',
  styleUrls: ['./v-homestay.component.css']
})
export class VHomestayComponent implements OnInit {
  allowMultidate: boolean

  dropdownList1 = [];
  dropdownList2 = [];
  dropdownList3 = [];
  selectedItems = [];
  dropdownSettings = {};
  homeData:{};
  fValue: String;
  HomestayForm: FormGroup;
  @ViewChild('image') HomestayUserImage;
  HomestayImageFile: File;
  constructor(private _router:Router,private _home:VenderService,private fb: FormBuilder) { 
    
    this.HomestayForm = this.fb.group({
     'name': ['', [Validators.required("name is required")]],

     'small_dog': this.fb.array([this.Dog1()]),
     'medium_dog': this.fb.array([this.Dog1()]),
     'large_dog': this.fb.array([this.Dog1()]),

     'small_dog1': this.fb.array([this.Dog2()]),
     'medium_dog1': this.fb.array([this.Dog2()]),
     'large_dog1': this.fb.array([this.Dog2()]),
     
     
     'cat1': this.fb.array([this.cat1()]),
     'cat2': this.fb.array([this.cat2()]),
     'Other1': this.fb.array([this.Other1()]),
     'Other2': this.fb.array([this.Other2()]),
      'firstname': ['', Validators.compose([Validators.required,Validators.max(12),Validators.min(5)])],
      'lastname': ['', Validators.compose([Validators.required])],
      'address1': ['', Validators.compose([Validators.required])],
      'address2': ['', Validators.compose([Validators.required])],
      'country': ['', Validators.compose([Validators.required])],
      'state': ['', Validators.compose([Validators.required])],
      'city': ['', Validators.compose([Validators.required])],
      'pincode': ['', Validators.compose([Validators.required])],
      'email': ['', Validators.email()],
      'phoneno': [null, Validators.required('phone number is required')],

      'drop': null,
      'pick': null,
      'maxpet': null,
      'Available': null,
      'NotAvailable':null,
      'onedog': false,

      
      'services1': false,
      'first_aidkit': false,
      'senior_dog': false,
      'medication': false,
      'booking': false,
      'home_visit': false,
      'pet_training': false,
      'females_on': false,
      'open_play': false,
      'need_ticks': false,
      'ac_accomodation': false,
      'ac_charges':false,

      'small': null,
      'medium': null,
      'large': null,
      'small_cat1': null,
      'medium_cat1': null,

      'pickdrop': false,
      'ChargePerkm': null,
      'MinCharge': null,
      'PickCharge': null,
      'DropCharge': null,
      //0-12 hours
      'Timings': false,
      'SmallPawCharge': null,
      'MediumPawCharge': null,
      'largePawCharge': null,

      'Food': false,
      'MealCharge': null,
     
      
 //What kind of pets to you taken in    
        //dog
      'noofpets': null,
      'Typeofpets': "",
      'breed':"",
      'gender':null,
      'age':"",
      // //cat
      // 'noofpets6': null,
      // 'max6': null,
      // 'Typeofpets6': null,
      // 'breed6':"",
      // 'gender6': "",
      // 'age6': "",
      //   //others
      //   'noofpets12': null,
      //   'max12': null,
      //   'Typeofpets12': null,
      //   'breed12':"",
      //   'gender12':"",
      //   'age12': "",
               
      //   //Any inhouse pets
      //      //dog
      // 'noofpets18': null,
      // 'max18': null,
      // 'Typeofpets18': null,
      // 'breed18': null,
      // 'gender18': null,
      // 'age18': null,
      // //cat
      // 'noofpets24': null,
      // 'max24': null,
      // 'Typeofpets24': null,
      // 'breed24': null,
      // 'gender24': null,
      // 'age24': null,
      //   //others
      //   'noofpets30': null,
      //   'max30': null,
      //   'Typeofpets30': null,
      //   'breed30': null,
      //   'gender30': null,
      //   'age30': null,


      'bankname': ['', Validators.compose([Validators.required])],
      'accname': ['', Validators.compose([Validators.required])],
      'branch': ['', Validators.compose([Validators.required])],
      'ifsc': ['', Validators.compose([Validators.required])],
      'accno': ['', Validators.compose([Validators.required])],
      'mmid': ['', Validators.compose([Validators.required])],
      'gst': ['', Validators.compose([Validators.required])],
      'accotype': ['', Validators.compose([Validators.required])],
      'writehere': ['',],
      'image': [''],
      'Conditions':null
    });
  }

  

 



  onItemSelect (item:any) {
    console.log(item);
  }
  onSelectAll (items: any) {
    console.log(items);
  }
  

  ngOnInit() {
    this.dropdownList1 = [
      { item_id: 1, item_text: 'Indian Spitz' },
      { item_id: 2, item_text: 'Dachshund' },
      { item_id: 3, item_text: 'Lhasa Apso' },
      { item_id: 4, item_text: 'Pembroke Welsh Corgi' },
      { item_id: 5, item_text: 'Jack Russell Terrier' },
      { item_id: 6, item_text: 'Beagle' },
      { item_id: 6, item_text: 'Bichon Frise' },
      { item_id: 6, item_text: 'Pomeranian' },
      { item_id: 6, item_text: 'Maltese' },
      { item_id: 6, item_text: 'Chihuahua' },
      { item_id: 6, item_text: 'Shih Tzu' },
      { item_id: 6, item_text: 'Toy Poodle' },
    ];

   
    this.dropdownList2 = [
      { item_id: 1, item_text: 'Labrador Retriever' },
      { item_id: 2, item_text: 'English Bulldog' },
      { item_id: 3, item_text: 'Boxer' },
      { item_id: 4, item_text: 'Brittany' },
      { item_id: 5, item_text: 'Cocker Spaniel' },
      { item_id: 6, item_text: 'English Shepherd' },
      { item_id: 7, item_text: 'Brittany' },
      { item_id: 8, item_text: 'Border Collie' },
      { item_id: 9, item_text: 'Shetland Sheepdog' },
      { item_id: 10, item_text: 'Brittany' },
      { item_id: 11, item_text: 'Basset Hound' },
      { item_id: 12, item_text: 'Chow Chow' },
 
    ];
    this.dropdownList3 = [
      { item_id: 1, item_text: 'Golden Retriever' },         
      { item_id: 2, item_text: 'Doberman' },
      { item_id: 3, item_text: 'Saint Bernard' },
      { item_id: 4, item_text: 'Mastiff' },
      { item_id: 5, item_text: 'Collie' },
      { item_id: 6, item_text: 'Great Dane' },
      { item_id: 7, item_text: 'Dalmatian' },
      { item_id: 8, item_text: 'Bernese Mountain Dog' },
      { item_id: 9, item_text: 'American Bulldog' },
      { item_id: 10, item_text: 'Rhodesian' },
      { item_id: 11, item_text: 'Ridgeback' },
 
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
  
    
    $(function () {
      $('#datetimepicker3').datetimepicker({
          format: 'LT'
          
      });
      $('#datetimepicker4').datetimepicker({
        format: 'LT'
    });
    $('.date').datepicker({
      multidate: true,
      format: 'mm/dd/yyyy',
   
    });

  //  $('select').selectpicker();
    });

    
  }
 
  public Homestay(value) {
    console.log(value);
    this.fValue = JSON.stringify(this.HomestayForm.value)
    const Image = this.HomestayUserImage.nativeElement;
    if (Image.files && Image.files[0]) {
      this.HomestayImageFile = Image.files[0];
    }
    const ImageFile: File = this.HomestayImageFile;
      console.log(ImageFile);

    const fd:FormData=new FormData();
    
   fd.append('small_dog',JSON.stringify(value.small_dog));
   fd.append('medium_dog',JSON.stringify(value.medium_dog));
   fd.append('large_dog',JSON.stringify(value.large_dog));
   fd.append('row_dynamic',JSON.stringify(value.row_dynamic));
   
   fd.append('cat1',JSON.stringify(value.cat1));
   fd.append('cat2',JSON.stringify(value.cat2));

   fd.append('small_dog1',JSON.stringify(value.small_dog1));
   fd.append('medium_dog1',JSON.stringify(value.medium_dog1));
   fd.append('large_dog1',JSON.stringify(value.large_dog1));

   fd.append('Other1',JSON.stringify(value.Other1));
   fd.append('Other2',JSON.stringify(value.Other2));

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
   
    fd.append('drop',value.drop);
    fd.append('pick',value.pick);
    // fd.append('maxpet',value.maxpet);
    fd.append('Available',value.Available);
    fd.append('NotAvailable',value.NotAvailable);
    fd.append('onedog',value.onedog);
   

   
    fd.append('services1',value.services1);
    fd.append('first_aidkit',value.first_aidkit);
    fd.append('senior_dog',value.senior_dog);
    fd.append('booking',value.booking);
    fd.append('medication',value.medication);
    fd.append('home_visit',value.home_visit);
    fd.append('pet_training',value.pet_training);
    fd.append('females_on',value.females_on);
    fd.append('open_play',value.open_play);
    fd.append('need_ticks',value.need_ticks);
    fd.append('ac_accomodation',value.ac_accomodation);
    fd.append('ac_charges',value.ac_charges);

    fd.append('small',value.small);
    fd.append('medium',value.medium);
    fd.append('large',value.large);
    fd.append('small_cat1',value.small_cat1);
    fd.append('medium_cat1',value.medium_cat1);

    fd.append('pickdrop',value.pickdrop);
    fd.append('ChargePerkm',value.ChargePerkm);
    fd.append('MinCharge',value.MinCharge);
    fd.append('PickCharge',value.PickCharge);
    fd.append('DropCharge',value.DropCharge);

    fd.append('Timings',value.Timings);
    fd.append('SmallPawCharge',value.SmallPawCharge);
    fd.append('MediumPawCharge',value.MediumPawCharge);
    fd.append('largePawCharge',value.largePawCharge);

    fd.append('Food',value.Food);
    fd.append('MealCharge',value.MealCharge);
   



    
//What kind of pets to you taken in    
        //dog
        fd.append('noofpets',value.noofpets);
        fd.append('Typeofpets',value.Typeofpets);
        fd.append('breed',value.breed);   
        fd.append('gender',value.gender);
        fd.append('age',value.age);
        
      
    fd.append('bankname',value.bankname);
    fd.append('accname',value.accname);
    fd.append('branch',value.branch);
    fd.append('ifsc',value.ifsc);
    fd.append('accno',value.accno);
    fd.append('mmid',value.mmid);
    fd.append('gst',value.gst);
    fd.append('accotype',value.accotype);
    fd.append('writehere',value.writehere);
    fd.append('Conditions',value.Conditions),
  

    fd.append('image',ImageFile,ImageFile.name);
    this._home.homestay(fd)
    .subscribe(
      data=>{
        console.log(data);
      }
    );
  }
 
  cat1(): FormGroup {

    return this.fb.group({
      'gender': [''],
      'breed':[''],
    });

  }
  cat2(): FormGroup {

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

  Dog1(): FormGroup {

    return this.fb.group({
      'Typeofpets': [''],
      'breed':[''],
    });

  }

  Dog2(): FormGroup {

    return this.fb.group({
      'Typeofpets': [''],
      'breed':[''],
    });

  }

  getItems(val) {
    console.log(val);
    return 'OK';
  }

  submitForm() {
    this.fValue = JSON.stringify(this.HomestayForm.value)
  }

  addField(ind) {
    const fArr = this.HomestayForm.get('cat1') as FormArray;
    fArr.insert(ind + 1, this.cat1());
  }
  
  addField1(ind) {
    const fArr = this.HomestayForm.get('Other1') as FormArray;
    fArr.insert(ind + 1, this.Other1());
  }

  addField2(ind) {
    const fArr = this.HomestayForm.get('cat2') as FormArray;
    fArr.insert(ind + 1, this.cat2());
  }
  addField3(ind) {
    const fArr = this.HomestayForm.get('Other2') as FormArray;
    fArr.insert(ind + 1, this.Other2());
  }

  removeField(ind) {
    const fArr = this.HomestayForm.get('cat1') as FormArray;
    fArr.removeAt(ind);
  }

  removeField1(ind) {
    const fArr = this.HomestayForm.get('Other1') as FormArray;
    fArr.removeAt(ind);
  }

  removeField2(ind) {
    const fArr = this.HomestayForm.get('cat2') as FormArray;
    fArr.removeAt(ind);
  }

  removeField3(ind) {
    const fArr = this.HomestayForm.get('Other2') as FormArray;
    fArr.removeAt(ind);
  }


}

