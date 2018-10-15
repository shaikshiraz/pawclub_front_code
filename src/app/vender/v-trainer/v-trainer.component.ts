import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { VenderService } from '../vender.service';
@Component({
  selector: 'v-trainer',
  templateUrl: './v-trainer.component.html',
  styleUrls: ['./v-trainer.component.css']
})
export class VTrainerComponent implements OnInit {

  TrainerForm: FormGroup;
  @ViewChild('image') TrainerUserImage;
  TrainerImageFile: File;
  constructor(private _trainer: VenderService, private fb: FormBuilder) {

    this.TrainerForm = this.fb.group({
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

      'opentime': null,
      'closetime': null,
      'Available': null,
      'notAvailable': null,
      'BreadTraining': null,
      'Conditions': null,
      //Cost type of services
      'services': false,
      //Behavioral training
      'session1': null,
      'small': null,
      'medium': null,
      'large': null,
      //O'bedience training
      'session2': null,
      'small1': null,
      'medium1': null,
      'large1': null,
      //Agility training
      'session3': null,
      'small2': null,
      'medium2': null,
      'large2': null,
      // Vocational training
      'session4': null,
      'small3': null,
      'medium3': null,
      'large3': null,
      //Therapy training
      'session5': null,
      'small4': null,
      'medium4': null,
      'large4': null,
      //other
      'otherServices': null,
      'small5': null,
      'medium5': null,
      'large5': null,







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



  public Training(value) {
    const Image = this.TrainerUserImage.nativeElement;
    if (Image.files && Image.files[0]) {
      this.TrainerImageFile = Image.files[0];
    }
    const ImageFile: File = this.TrainerImageFile;
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

    fd.append('opentime', value.opentime);
    fd.append('closetime', value.closetime);
    fd.append('Available', value.Available);
    fd.append('notAvailable', value.notAvailable);
    fd.append('BreadTraining', value.BreadTraining);
    fd.append('Conditions', value.Conditions);


      //Cost type of services
    fd.append('services', value.services);
  //Behavioral training
    fd.append('session1', value.session1);
    fd.append('small', value.small);
    fd.append('medium', value.medium);
    fd.append('large', value.large);
 //O'bedience training
    fd.append('session2', value.session2);
    fd.append('small1', value.small1);
    fd.append('medium1', value.medium1);
    fd.append('large1', value.large1);

       //Agility training
    fd.append('session3', value.session3);
    fd.append('small2', value.small2);
    fd.append('medium2', value.medium2);
    fd.append('large2', value.large2);

      // Vocational training
    fd.append('session4', value.session4);
    fd.append('small3', value.small3);
    fd.append('medium3', value.medium3);
    fd.append('large3', value.large3);
          //Therapy training
    fd.append('session5', value.session5);
    fd.append('small4', value.small4);
    fd.append('medium4', value.medium4);
    fd.append('large4', value.large4);
    //other 
    fd.append('otherServices', value.otherServices);
    fd.append('small5', value.small5);
    fd.append('medium5', value.medium5);
    fd.append('large5', value.large5);
 


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
    this._trainer.trainer(fd)
      .subscribe(
        data => {
          console.log(data);
        }
      );
  }


  ngOnInit() {
  }


}
