import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {
  @Input() showVerticalStepper: Boolean;

  branchCtrl: FormControl;
  filteredBranch: Observable<any[]>;


  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  selectedbranchTypeValue: string;
  selectedbranchVersionValue: string;

  branchType = [
    {value: 'Commercial'},
    {value: 'Souk'},
    {value: 'Neighbourhood'},
    {value: 'Mall'},
    {value: 'Other'}
  ];

  branchVersion = [
    {value: 'Digital', name: 'Fully Digital'},
    {value: 'Digital-Hybrid', name: 'Digital/Hybrid'},
    {value: 'Hybrid', name: 'Hybrid'},
    {value: 'Normal-Hybrid', name: 'Normal/Hybrid'},
    {value: 'Normal', name: 'Normal'}
  ];

  branchTag = ['Branch Tag 1', 'Branch Tag 2', 'Branch Tag 3', 'Branch Tag 4', 'Branch Tag 5'];

  branch: any[] = [
    {
       branchCat : 'Commercial',
       branchName : 'Abu Dhabi Main Branch, Abu Dhabi'
    },{
       branchCat : 'Souk',
       branchName : 'Ajman Main Branch'
    }
    ,{
       branchCat : 'Commercial',
       branchName : 'Al Ain Main, Al Ain'
    }
    ,{
       branchCat : 'Commercial',
       branchName : 'Al Ain Mall, Al Ain'
    }
    ,{
       branchCat : 'Neighbourhood',
       branchName : 'Al Aweer Branch'
    }
    ,{
       branchCat : 'Commercial',
       branchName : 'Al Barsha Branch'
    }
    ,{
       branchCat : 'Souk',
       branchName : 'Al Faheedi Branch, Dubai'
    }
    ,{
       branchCat : 'Commercial',
       branchName : 'Al Ittihad Branch, Dubai'
    }
    ,{
       branchCat : 'Souk',
       branchName : 'Al Karama Branch'
    }
    ,{
       branchCat : 'Souk',
       branchName : 'Al Maktoum Branch, Dubai'
    }
    ,{
       branchCat : 'Neighbourhood',
       branchName : 'Al Mizhar Branch, Dubai'
    }
    ,{
       branchCat : 'Mall',
       branchName : 'Al Muhairy Centre Branch, Abu Dhabi'
    }
    ,{
       branchCat : 'Souk',
       branchName : 'Al Muraqabat Branch'
    }
    ,{
       branchCat : 'Commercial',
       branchName : 'Al Muroor Branch, Abu Dhabi'
    }
    ,{
       branchCat : 'Commercial',
       branchName : 'Al Najdah Branch, Abu Dhabi'
    }
    ,{
       branchCat : 'Souk',
       branchName : 'Al Qiyadah Branch, Dubai'
    }
    ,{
       branchCat : 'Commercial',
       branchName : 'Al Quoz Branch'
    }
    ,{
       branchCat : 'Neighbourhood',
       branchName : 'Al Qusais Branch, Dubai'
    }
    ,{
       branchCat : 'Souk',
       branchName : 'Al Ras Branch, Dubai'
    }
    ,{
       branchCat : 'Souk',
       branchName : 'Al Rashidiya Branch, Dubai'
    }
    ,{
       branchCat : 'Souk',
       branchName : 'Al Souk Branch'
    }
    ,{
       branchCat : 'Neighbourhood',
       branchName : 'Al Taawun Branch'
    }
    ,{
       branchCat : 'Commercial',
       branchName : 'Al Twar Branch, Dubai'
    }
    ,{
       branchCat : 'Mall',
       branchName : 'Al Wahda Branch, Abu Dhabi'
    }
    ,{
       branchCat : 'Mall',
       branchName : 'Bank Street Branch, Dubai'
    }
    ,{
       branchCat : 'Mall',
       branchName : 'Bawabat Al Sharq Mall Branch, Abu Dhabi'
    }
    ,{
       branchCat : 'Neighbourhood',
       branchName : 'Burj Al Arab Branch'
    }
    ,{
       branchCat : 'Commercial',
       branchName : 'Business Bay Branch'
    }
    ,{
       branchCat : 'Commercial',
       branchName : 'Convention Centre Branch, Dubai'
    }
    ,{
       branchCat : 'Mall',
       branchName : 'Dalma Mall Branch, Abu Dhabi'
    }
    ,{
       branchCat : 'Mall',
       branchName : 'Deerfield Mall Branch'
    }
    ,{
       branchCat : 'Other',
       branchName : 'Deira Branch'
    }
    ,{
       branchCat : 'Mall',
       branchName : 'Deira City Centre Branch'
    }
    ,{
       branchCat : 'Mall',
       branchName : 'Dragon Mart'
    }
    ,{
       branchCat : 'Commercial',
       branchName : 'Dubai Airline Centre Branch'
    }
    ,{
       branchCat : 'Commercial',
       branchName : 'Dubai Airport T3'
    }
    ,{
       branchCat : 'Commercial',
       branchName : 'Dubai Courts Branch'
    }
    ,{
       branchCat : 'Mall',
       branchName : 'Dubai Festival City Branch, Dubai'
    }
    ,{
       branchCat : 'Mall',
       branchName : 'Dubai Mall Branch'
    }
    ,{
       branchCat : 'Commercial',
       branchName : 'Dubai Marina Branch'
    }
    ,{
       branchCat : 'Mall',
       branchName : 'Dubai Marina Mall Branch'
    }
    ,{
       branchCat : 'Commercial',
       branchName : 'Dubai Media City Branch, Dubai'
    }
    ,{
       branchCat : 'Commercial',
       branchName : 'Dubai Police Academy Branch'
    }
    ,{
       branchCat : 'Commercial',
       branchName : 'Dubai Silicon Oasis Branch'
    }
    ,{
       branchCat : 'Commercial',
       branchName : 'Electra Street Branch, Abu Dhabi'
    }
    ,{
       branchCat : 'Commercial',
       branchName : 'Emirates Airline HQ Branch'
    }
    ,{
       branchCat : 'Mall',
       branchName : 'Emirates Mall Branch, Dubai'
    }
    ,{
       branchCat : 'Commercial',
       branchName : 'Emirates Tower Branch, Dubai'
    }
    ,{
       branchCat : 'Neighbourhood',
       branchName : 'Fujairah Main Branch'
    }
    ,{
       branchCat : 'Mall',
       branchName : 'Galleria Branch, Dubai'
    }
    ,{
       branchCat : 'Commercial',
       branchName : 'Green Community Branch, Dubai'
    }
    ,{
       branchCat : 'Commercial',
       branchName : 'Group Head Office Branch'
    }
    ,{
       branchCat : 'Souk',
       branchName : 'Hamriya Branch, Dubai'
    }
    ,{
       branchCat : 'Neighbourhood',
       branchName : 'Hatta Branch'
    }
    ,{
       branchCat : 'Mall',
       branchName : 'Ibn Battuta Mall Branch'
    }
    ,{
       branchCat : 'Commercial',
       branchName : 'Jebel Ali, Dubai'
    }
    ,{
       branchCat : 'Neighbourhood',
       branchName : 'Jumeirah Beach Rd Branch, Dubai'
    }
    ,{
       branchCat : 'Neighbourhood',
       branchName : 'Jumeirah Beach Walk Branch'
    }
    ,{
       branchCat : 'Commercial',
       branchName : 'Jumeirah Branch, Dubai'
    }
    ,{
       branchCat : 'Commercial',
       branchName : 'Jumeirah Lake Towers'
    }
    ,{
       branchCat : 'Souk',
       branchName : 'Karama Shopping Complex Branch'
    }
    ,{
       branchCat : 'Commercial',
       branchName : 'Khaladiyah Branch, Abu Dhabi'
    }
    ,{
       branchCat : 'Mall',
       branchName : 'Mall of the Emirates, Dubai'
    }
    ,{
       branchCat : 'Neighbourhood',
       branchName : 'Mamzar Branch, Dubai'
    }
    ,{
       branchCat : 'Neighbourhood',
       branchName : 'Mankhool Branch, Dubai'
    }
    ,{
       branchCat : 'Other',
       branchName : 'Matajer Al Quoz Branch'
    }
    ,{
       branchCat : 'Mall',
       branchName : 'Mirdif City Centre Branch'
    }
    ,{
       branchCat : 'Souk',
       branchName : 'Mizher Mall Branch, Dubai'
    }
    ,{
       branchCat : 'Neighbourhood',
       branchName : 'Motor City Branch'
    }
    ,{
       branchCat : 'Commercial',
       branchName : 'Muhaisnah Branch'
    }
    ,{
       branchCat : 'Commercial',
       branchName : 'Mussafah Branch , Abu Dhabi'
    }
    ,{
       branchCat : 'Commercial',
       branchName : 'Nad Al Shiba Branch, Dubai'
    }
    ,{
       branchCat : 'Commercial',
       branchName : 'Oud Metha Branch, Dubai'
    }
    ,{
       branchCat : 'Commercial',
       branchName : 'Ramoul Branch, Dubai'
    }
    ,{
       branchCat : 'Souk',
       branchName : 'Ras Al Khaimah Corniche Branch'
    }
    ,{
       branchCat : 'Souk',
       branchName : 'Ras Al Khaimah Main Branch'
    }
    ,{
       branchCat : 'Mall',
       branchName : 'Ras Al Khaimah Mall Branch'
    }
    ,{
       branchCat : 'Commercial',
       branchName : 'Ras Al Khor Branch'
    }
    ,{
       branchCat : 'Neighbourhood',
       branchName : 'Samnan Branch, Sharjah'
    }
    ,{
       branchCat : 'Souk',
       branchName : 'Satwa Branch, Dubai'
    }
    ,{
       branchCat : 'Commercial',
       branchName : 'Sharjah Airport Branch'
    }
    ,{
       branchCat : 'Mall',
       branchName : 'Sharjah City Centre Branch'
    }
    ,{
       branchCat : 'Commercial',
       branchName : 'Sharjah Industrial Branch'
    }
    ,{
       branchCat : 'Commercial',
       branchName : 'Sharjah Industrial Branch'
    }
    ,{
       branchCat : 'Commercial',
       branchName : 'Sharjah Main Branch'
    }
    ,{
       branchCat : 'Commercial',
       branchName : 'Sheikh Zayed Road Branch'
    }
    ,{
       branchCat : 'Commercial',
       branchName : 'Tecom Branch'
    }
    ,{
       branchCat : 'Commercial',
       branchName : 'Tourist Club Branch, Abu Dhabi'
    }
    ,{
       branchCat : 'Commercial',
       branchName : 'Tower Branch, Dubai'
    }
    ,{
       branchCat : 'Commercial',
       branchName : 'Umm Al Quwain Branch'
    }
    ,{
       branchCat : 'Neighbourhood',
       branchName : 'Umm Suqueim Branch'
    }
    ,{
       branchCat : 'Souk',
       branchName : 'Union Square Branch, Dubai'
    }
    ,{
       branchCat : 'Mall',
       branchName : 'Wafi Mall Branch, Dubai'
    }
    ,{
       branchCat : 'Commercial',
       branchName : 'World Trade Centre Branch, Dubai'
    }
];


  constructor(private _formBuilder: FormBuilder) {

    this.branchCtrl = new FormControl();
      this.filteredBranch = this.branchCtrl.valueChanges
          .startWith(null)
          .map(branch => branch ? this.filterBranch(branch) : this.branch.slice());
  }


  filterBranch(name: string) {
    return this.branch.filter(branch =>
      branch.branchName.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    //this.showVerticalStepper = false;
  }

}
