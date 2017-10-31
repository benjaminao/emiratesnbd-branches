import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Http } from '@angular/http';
import { Branch } from '../branch';
import { BranchService } from '../branch.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  providers: [BranchService],
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {
  @Input() showVerticalStepper: Boolean;

  branchCtrl: FormControl;
  filteredBranch: Observable<Branch[]>;


  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  branchs: Branch[];
  selectedbranch: string;
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


  getBranchs(): void {
      this.BranchService.getBranchs().then(branchs => {
      this.branchs = branchs;
      this.filteredBranch = this.branchCtrl.valueChanges
          .startWith(null)
          .map(branch => branch ? this.filterBranch(branch) : this.branchs.slice());
      })
    }



  constructor(private _formBuilder: FormBuilder,
              private http: Http,
              private BranchService: BranchService) {
    this.getBranchs();
    this.branchCtrl = new FormControl();
      // this.filteredBranch = this.branchCtrl.valueChanges
      //     .startWith(null)
      //     .map(branch => branch ? this.filterBranch(branch) : this.branchs.slice());
  }


  filterBranch(name: string) {
    return this.branchs.filter(branch =>
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
  }

}
