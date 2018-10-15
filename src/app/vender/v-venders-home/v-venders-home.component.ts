import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-v-venders-home',
  templateUrl: './v-venders-home.component.html',
  styleUrls: ['./v-venders-home.component.css']
})
export class VVendersHomeComponent implements OnInit {

  private k ="";
  private _values1 = ["ACCOMMODATION","PETCARE","FOOD", "NGO"];
  private _values2 = [];
  private _values3 = [];
  constructor(private router: Router) { }

  ngOnInit() {
 
  }

  firstDropDownChanged(val: any) {
    console.log(val);

    if (val == "ACCOMMODATION") {
      this._values2 = ["Homestay","Kennels"];
    }
    else if (val == "PETCARE") {
      this._values2 = ["Dog Walking", "Grooming", "Trainer","Transportaion","Swimming","Photography",];
    }
    else if (val == "NGO") {
      this._values2 = ["Ngo",
      
      ];
    }
    else if (val == "FOOD") {
      this._values2 = ["Food"];
    }
    else {
      this._values2 = [];
    }
  }
  secondDropDownChanged(val: any) {
    if (val == "Homestay") {
    this.k="/venders/v-home-stay"
    }
    else if (val == "Kennels") {
      this.k="/venders/v-kennel"
      }
      else if (val == "Transportaion") {
        this.k="/venders/v-transportation"
        }
        else if (val == "Swimming") {
          this.k="/venders/v-swimming-pool"
          }
          else if (val == "Grooming") {
            this.k="/venders/v-grooming"
            }
            else if (val == "Trainer") {
              this.k="/venders/v-trainer"
              }
            else if (val == "Photography") {
        this.k="/venders/v-photo"
        }
       else if (val == "Dog Walking") {
        this.k="/venders/v-dog-walking"
        }
        else if (val == "Ngo") {
          this.k="/venders/v-ngo"
          }
          else if (val == "Food") {
            this.k="/venders/v-food"
            }
  }


}
