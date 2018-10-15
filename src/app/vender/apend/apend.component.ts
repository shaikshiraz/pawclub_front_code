import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-apend',
  templateUrl: './apend.component.html',
  styleUrls: ['./apend.component.css']
})
export class ApendComponent implements OnInit {

  fGroup: FormGroup;
  fValue: String;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.fGroup = this.fb.group({
      'name': ['Test Dynamic Form', [Validators.required]],
      'row_dynamic': this.fb.array([this.generateDynamicItems()])
    });
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
    this.fValue = JSON.stringify(this.fGroup.value)
  }

  addField(ind) {
    const fArr = this.fGroup.get('row_dynamic') as FormArray;
    fArr.insert(ind + 1, this.generateDynamicItems());
  }

  removeField(ind) {
    const fArr = this.fGroup.get('row_dynamic') as FormArray;
    fArr.removeAt(ind);
  }


}
