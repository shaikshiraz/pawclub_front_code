import { Component, OnInit,ViewChild } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';
import { VenderService } from '../vender.service';
@Component({
  selector: 'v-kennel',
  templateUrl: './v-kennel.component.html',
  styleUrls: ['./v-kennel.component.css']
})
export class VKennelComponent implements OnInit {
  KennelForm: FormGroup;
  @ViewChild('image') KennelUserImage;
  KennelImageFile: File;
  constructor(private fb: FormBuilder,private _kennel:VenderService) { 
    
    this.KennelForm = this.fb.group({
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
        
       //Operating Hours
       'From':[''],
       'To':[''],
       //Friendly with people
       'people':null,
       //Friendly with kids
       'kids':null,
       //Friendly with other dogs
       'otherdogs':null,
       //Friendly with other cats
       'cats':null,
       //Do you provide kibbles
       'kibbles':false,
       // What is the : per portion
        'cost':null,

       'services':false,
       'first_aidkit': false,
       'senior_dog':false,
       'females_on':false,
       //Daily updates given to pet owners
       'updates':false,
       //Separate rooms for pets
       'rooms':false,
       //Bath available on request on extra charge
       'Bath':false,
       //Swimming pool available
       'Swimming':false,
       //Can Adminster oral medication if necessary
       'medication':false,
       //Instant booking allowed
       'booking':false,
       //Home visit mandatory
       'home_visit':false,
       //Do you take in only house trained pets
       'pet_training':false,
       //Need to be free from ticks
       'need_ticks':false,
       //open play area
       'open_play':false,
       // A/C accomodation Available
       'ac_accomodation':false,
       'ac_charges':null,

       //Do You Provide Pick and drop
       'PickDrop':false,
       'ChargePerkm':null,
       'MinCharge':null,
       'PickCharge':null,
       'DropCharge':null,



       //  Day Care Services Provided(less Then 24hrs)
       //Timings
       'Timings': false,
       //'0to12' hour
       'SmallPawCharge':null,
       'MediumPawCharge':null,
       'largePawCharge':null,

       'Food': false,
       'MealCharge':null,
       //Responds to Commands
       'PawName':null,
       'sit':null,
       'come':null,
       'walk':null,
       'No':null,
       'stay':null,

      
      

      


      'bankname': ['', Validators.compose([Validators.required])],
      'accname': ['', Validators.compose([Validators.required])],
      'branch': ['', Validators.compose([Validators.required])],
      'ifsc': ['', Validators.compose([Validators.required])],
      'accno': ['', Validators.compose([Validators.required])],
      'mmid': ['', Validators.compose([Validators.required])],
      'gst': ['', Validators.compose([Validators.required])],
      'accotype': ['', Validators.compose([Validators.required])],
      'Conditions': null,
      'writehere': null,
      'image': ['']
    });
  }

  

  public Kennel(value) {
    const Image = this.KennelUserImage.nativeElement;
    if (Image.files && Image.files[0]) {
      this.KennelImageFile = Image.files[0];
    }
    const ImageFile: File = this.KennelImageFile;
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
   
    fd.append('From',value.From);
    fd.append('To',value.To);
    fd.append('people',value.people);
    fd.append('kids',value.kids);
    fd.append('otherdogs',value.otherdogs);
    fd.append('cats',value.cats);

    fd.append('kibbles',value.kibbles);
     // What is the : per portion
     fd.append('cost',value.cost);
    fd.append('services',value.services);
    fd.append('first_aidkit',value.first_aidkit);
    fd.append('senior_dog',value.senior_dog);

    fd.append('females_on',value.females_on);
    fd.append('updates',value.updates);
    fd.append('rooms',value.rooms);
    fd.append('Bath',value.Bath);
    fd.append('Swimming',value.Swimming);

    fd.append('medication',value.medication);
    fd.append('booking',value.booking);
    fd.append('home_visit',value.home_visit);
    fd.append('pet_training',value.pet_training);
    fd.append('need_ticks',value.need_ticks);
    fd.append('open_play',value.open_play);
    fd.append('ac_accomodation',value.ac_accomodation);
    fd.append('ac_charges',value.ac_charges);

  fd.append('PickDrop',value.PickDrop);
  fd.append('ChargePerkm',value.ChargePerkm);
  fd.append('MinCharge',value.MinCharge);
  fd.append('PickCharge',value.PickCharge);
  fd.append('DropCharge',value.DropCharge);
  
 
  fd.append('Timings',value.medication);
  fd.append('SmallPawCharge',value.SmallPawCharge);
  fd.append('MediumPawCharge',value.MediumPawCharge);
  fd.append('largePawCharge',value.largePawCharge);
  fd.append('come',value.come);
  fd.append('walk',value.walk);
  fd.append('No',value.No);
  fd.append('stay',value.stay);

  
    fd.append('bankname',value.bankname);
    fd.append('accname',value.accname);
    fd.append('branch',value.branch);
    fd.append('ifsc',value.ifsc);
    fd.append('accno',value.accno);
    fd.append('mmid',value.mmid);
    fd.append('gst',value.gst);
    fd.append('accotype',value.accotype);
    fd.append('Conditions',value.Conditions);
    fd.append('writehere',value.writehere);
    
  


    fd.append('image',ImageFile,ImageFile.name);
    this._kennel.kennel(fd)
    .subscribe(
      data=>{
        console.log(data);
      }
    );
  }

    
  ngOnInit() {
  }

}
