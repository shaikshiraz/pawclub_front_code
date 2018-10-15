import { Component, OnInit,ViewChild } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators,FormArray} from '@angular/forms';
import { VenderService } from '../vender.service';
@Component({
  selector: 'app-v-pet-profile',
  templateUrl: './v-pet-profile.component.html',
  styleUrls: ['./v-pet-profile.component.css']
})
export class VPetProfileComponent implements OnInit {
  dropdownList1 = [];
  dropdownList2 = [];
  dropdownList3 = [];
  selectedItems = [];
  dropdownSettings = {};
  PetProfileForm: FormGroup;
  @ViewChild('image') PetProfileUserImage;
  PetProfileImageFile: File;
  constructor(private fb: FormBuilder,private _petProfiles:VenderService) {

    this.PetProfileForm = this.fb.group({
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
      'Medications':this.fb.array([this.Medications()]),
      
      //What kind of pets to you taken in    
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

          //Name of the Pets
'petName':null,
'Breed':null,
'Dateofbirth':null,
//Pet Id Number
'petId':null,
//Vaccination records
'Rabels':false,
'KennelCough':false,
'Distemper':false,
'provo':false,
//Adminstraion date

'Adminstraion1':null,
'Adminstraion2':null,
'Adminstraion3':null,
'Adminstraion4':null,

//Due Date
'Due1':null,
'Due2':null,
'Due3':null,
'Due4':null,

//Food Habit
'MorningMeal':false,
'AfternoonMeal' :false,
'EveningMeal':false,
'NightMeal':false,
//Sleep habit
'OntheFloor':false,
'Mattress':false,
'Bed':false,
'Sofa':false,
'Other':false,

'otherText':null,
//Walking timings
'MorningWalk' :false,
'AfternoonWalk' :false,
'EveningWalk':false,

//Like swimming
'LikeSwim':null,
//Are they okey left alone at home?
'AloneHome':null,
//Friendly with people
'FriendlyWithPeople':null,
//Friendly with kids
'FriendlyWithkids':null,
//Friendly with other dogs
'FriendlyWithOtherDogs':null,
//Friendly with other cats
'FriendlyWithOtherCats':null,
//
//Currently under going Any medications
'UnderGoing':null,
'Ongoing':null,

//Name Of Medications
'petname':null,
'pettype':null,
'OwnerName':null,
'ownerPhoneno':null,

// 'petname1':null,
// 'pettype1':null,
// 'OwnerName1':null,
// 'ownerPhoneno1':null,

// 'petname2':null,
// 'pettype2':null,
// 'OwnerName2':null,
// 'ownerPhoneno2':null,

// 'petname3':null,
// 'pettype3':null,
// 'OwnerName3':null,
// 'ownerPhoneno3':null,

// 'petname4':null,
// 'pettype4':null,
// 'OwnerName4':null,
// 'ownerPhoneno4':null,

'MedicationName':null,
'Timing':null,
'AfterFood':null,

//Name OF Consulting doctors
'DoctorName':null,
'ContactNo':null,
//In Case of any emergencies Who do we Contacts
'Emergencies':null,
'EmergencyPhone':null,

'Like':null,
'Dislike':null,
'Others':null,

//Responds to Commands
'PawName':null,
'Sit':null,
'come':null,
'walk':null,
'No':null,
'stay':null,
'writehere':null,
'Condition':null,

   
      'image':null,
    });
   }

    public petProfile(value) {
    const Image = this.PetProfileUserImage.nativeElement;
    if (Image.files && Image.files[0]) {
      this.PetProfileImageFile = Image.files[0];
    }
    const ImageFile: File = this.PetProfileImageFile;
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


//What kind of pets to you taken in    
        //dog
        fd.append('small_dog',JSON.stringify(value.small_dog));
        fd.append('medium_dog',JSON.stringify(value.medium_dog));
        fd.append('large_dog',JSON.stringify(value.large_dog));
        
        fd.append('cat1',JSON.stringify(value.cat1));
        fd.append('Other1',JSON.stringify(value.Other1));
        fd.append('Medications',JSON.stringify(value.Medications));

        fd.append('noofpets',value.noofpets);
        // fd.append('max',value.max);
        fd.append('Typeofpets',value.Typeofpets);
        fd.append('breed',value.breed);   
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



        //Name of the Pets
        fd.append('petName',value.petName);
        fd.append('Breed',value.Breed);   
        fd.append('Dateofbirth',value.Dateofbirth);
        
//Pet Id Number
fd.append('petId',value.petId);
//Vaccination records
fd.append('Rabels',value.Rabels);
fd.append('KennelCough',value.KennelCough);
fd.append('Distemper',value.Distemper);
fd.append('provo',value.provo);

//Adminstraion date
fd.append('Adminstraion1',value.Adminstraion1);
fd.append('Adminstraion2',value.Adminstraion2);
fd.append('Adminstraion3',value.Adminstraion3);
fd.append('Adminstraion4',value.Adminstraion4);
//Due Date
fd.append('Due1',value.Due1);
fd.append('Due2',value.Due2);
fd.append('Due3',value.Due3);
fd.append('Due4',value.Due4);
//Food Habit
fd.append('MorningMeal',value.MorningMeal);
fd.append('AfternoonMeal',value.AfternoonMeal);
fd.append('EveningMeal',value.EveningMeal);
fd.append('NightMeal',value.NightMeal);
fd.append('OntheFloor',value.OntheFloor);
fd.append('Mattress',value.Mattress);
fd.append('Sofa',value.Sofa);
fd.append('Other',value.Other);

fd.append('otherText',value.otherText);



//Walking timings
fd.append('MorningWalk',value.MorningWalk);
fd.append('AfternoonWalk',value.AfternoonWalk);
fd.append('EveningWalk',value.EveningWalk);

//Like swimming
fd.append('LikeSwim',value.LikeSwim);
//Are they okey left alone at home?
fd.append('AloneHome',value.AloneHome);
//Friendly with people
fd.append('FriendlyWithPeople',value.FriendlyWithPeople);
//Friendly with kids
fd.append('FriendlyWithkids',value.FriendlyWithkids);
//Friendly with other dogs
fd.append('FriendlyWithOtherDogs',value.FriendlyWithOtherDogs);
//Friendly with other cats
fd.append('FriendlyWithOtherCats',value.FriendlyWithOtherCats);
//
//Currently under going Any medications
fd.append('UnderGoing',value.UnderGoing);
fd.append('Ongoing',value.Ongoing);
//Name Of Medications
fd.append('petname',value.petname);
fd.append('pettype',value.pettype);
fd.append('OwnerName',value.OwnerName);
fd.append('ownerPhoneno',value.ownerPhoneno);

// fd.append('petname1',value.petname1);
// fd.append('pettype1',value.pettype1);
// fd.append('OwnerName1',value.OwnerName1);
// fd.append('ownerPhoneno1',value.ownerPhoneno1);

// fd.append('petname2',value.petname2);
// fd.append('pettype2',value.pettype2);
// fd.append('OwnerName2',value.OwnerName2);
// fd.append('ownerPhoneno2',value.ownerPhoneno2);


// fd.append('petname3',value.petname3);
// fd.append('pettype3',value.pettype3);
// fd.append('OwnerName3',value.OwnerName3);
// fd.append('ownerPhoneno3',value.ownerPhoneno3);


// fd.append('petname4',value.petname4);
// fd.append('pettype4',value.pettype4);
// fd.append('OwnerName4',value.OwnerName4);
// fd.append('ownerPhoneno4',value.ownerPhoneno4);

fd.append('MedicationName',value.MedicationName);
fd.append('Timing',value.Timing);
fd.append('AfterFood',value.AfterFood);


//Name OF Consulting doctors
fd.append('DoctorName',value.DoctorName);
fd.append('ContactNo',value.ContactNo);
//In Case of any emergencies Who do we Contacts
fd.append('Emergencies',value.Emergencies);
fd.append('EmergencyPhone',value.EmergencyPhone);

fd.append('Like',value.Like);
fd.append('Dislike',value.Dislike);
fd.append('Others',value.Others);


//Responds to Commands
fd.append('PawName',value.PawName);
fd.append('Sit',value.Sit);
fd.append('come',value.come);
fd.append('walk',value.walk);
fd.append('No',value.No);
fd.append('stay',value.stay);


fd.append('writehere',value.writehere);
fd.append('Condition',value.Condition);

    fd.append('image',ImageFile,ImageFile.name);
    this._petProfiles.pet(fd)
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

  Medications(): FormGroup {

    return this.fb.group({
      'petname': [''],
      'pettype':[''],
      'OwnerName': [''],
      'ownerPhoneno':[''],
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


 

  addField(ind) {
    const fArr = this.PetProfileForm.get('cat1') as FormArray;
    fArr.insert(ind + 1, this.cat1());
  }
  addField1(ind) {
    const fArr = this.PetProfileForm.get('Other1') as FormArray;
    fArr.insert(ind + 1, this.Other1());
  }

  addField2(ind) {
    const fArr = this.PetProfileForm.get('Medications') as FormArray;
    fArr.insert(ind + 1, this.Other1());
  }

  removeField(ind) {
    const fArr = this.PetProfileForm.get('cat1') as FormArray;
    fArr.removeAt(ind);
  }
  removeField1(ind) {
    const fArr = this.PetProfileForm.get('Other1') as FormArray;
    fArr.removeAt(ind);
  }
  removeField2(ind) {
    const fArr = this.PetProfileForm.get('Medications') as FormArray;
    fArr.removeAt(ind);
  }


}
