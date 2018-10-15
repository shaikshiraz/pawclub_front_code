import { Component, OnInit,ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms'
import { VenderService } from '../vender.service';


@Component({
  selector: 'v-medications',
  templateUrl: './v-medications.component.html',
  styleUrls: ['./v-medications.component.css']
})
export class VMedicationsComponent implements OnInit {
  FileSelected:File=null;
  // image:File;
  // @ViewChild('UserImage') User_Image;




  UserForm: FormGroup;
  @ViewChild('image') AccUserImage;
  AccUserImageFile: File;

  constructor(private fb: FormBuilder,private http:HttpClient,private _medication:VenderService) {
    this.UserForm = this.fb.group({
      'name': ['', Validators.compose([Validators.required])],
      'image': ['',Validators.compose([Validators.required])]
    });
  }

  public CreateAccContact(value) {
    const Image = this.AccUserImage.nativeElement;
    if (Image.files && Image.files[0]) {
      this.AccUserImageFile = Image.files[0];
    }
    const ImageFile: File = this.AccUserImageFile;
    //  console.log(ImageFile);

    const fd:FormData=new FormData();
    fd.append('name',value.name);
    fd.append('image',ImageFile,ImageFile.name);
    this._medication.medications(fd)
    .subscribe(
      data=>{
        console.log(data);
      }
    );
    // this.http.post('http://localhost:3000/api/medications',fd)
    //       .subscribe(res=>{
    //         console.log(res);
    //       });
  }




  // constructor(private http:HttpClient,private fb:FormBuilder) {
  //   this.UserData=this.fb.group({
  //     name:[''],
  //     image:['']
  //   });
  //  }

  ngOnInit() {
  }

  // onSubmit(value:any){
  // console.log(value);
  // }
     
  
  // public CreateAccContact(value) {
  //   console.log(JSON.stringify(value));
  //   const Image = this.User_Image.nativeElement;
  //   if (Image.files && Image.files[0]) {
  //     this.AccUserImageFile = Image.files[0];
  //   }
  //   const ImageFile: File = this.AccUserImageFile;
  //   console.log(ImageFile);
  // }



  onFileSelected(event){
    this.FileSelected=<File>event.target.files[0];
    }
//     onUpload(value){
//        const fd:FormData=new FormData();
//        fd.append('image',this.FileSelected,this.FileSelected.name);
//       //  fd.append('name',userForm.value.name);
//       this.http.post('http://localhost:3000/api/medications',fd)
//       .subscribe(res=>{
//         console.log(res);
//       });

// }
onUpload(value){
  console.log(value);

}

}