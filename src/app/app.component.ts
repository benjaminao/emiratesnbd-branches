import { Component, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('divBranch', [
      state('one', style({
        //borderRadius: '250px',
        'background-color': 'white',
        transform: 'translateY(-100px) scale(0.4)'
      })),
      state('two', style({
        'background-color': 'white',
        transform: 'translateY(240px) scale(0.5)'
      })),
      state('three', style({
        'background-color': 'white',
        transform: 'translateY(300px) scale(1)'
      })),
      state('four', style({
        'background-color': 'white',
        transform: 'translateY(0px) scale(1)'
      })),
      transition('one => two', [
        animate(200,style({
          borderRadius: '200px'
        })),
        animate(400)
      ]),
      transition('two => three', animate(300)),
      transition('three => four', animate(300)),
      transition('four => one', animate(200))
    ])


  ]
})
export class AppComponent {
  title = 'app';
  state = 'one';
  crshowVerticalStepper = false;
  body = { left : 0, center : 12, right : 0, width: 1200 };



  showBranchForm(){
    console.log("showBranchForm");
    this.state == 'one' ? this.state = 'two' : this.state = 'one';
     setTimeout(() => this.state = 'three', 250);

  }
  showBranchNextForm(){
    console.log("showBranchNextForm");
    this.state == 'three' ? this.state = 'four' : this.state = 'three';
     setTimeout(() => {//this.state = 'one';

                       this.showBranchForm();
                     }, 210);
  }

  onResize(wdwidth) {
    //lg1
    this.body.width = wdwidth;
    if (wdwidth >= 1200) {
      this.body.left = 1;
      this.body.center = 10;
      this.body.right = 1;
      this.crshowVerticalStepper = false;
    }//lg
    else if (wdwidth < 1200 && wdwidth >= 1112) {
      this.body.left = 1;
      this.body.center = 11;
      this.body.right = 0;
      this.crshowVerticalStepper = false;
    }//mat1
    else if (wdwidth < 1112 && wdwidth >= 1010) {
      this.body.left = 0;
      this.body.center = 12;
      this.body.right = 0;
      this.crshowVerticalStepper = false;
    }//mat
    else if (wdwidth < 1010 && wdwidth >= 940) {
      this.body.left = 0;
      this.body.center = 12;
      this.body.right = 0;
      this.crshowVerticalStepper = false;
    }//sm1
    else if (wdwidth < 940 && wdwidth >= 830) {
      this.body.left = 0;
      this.body.center = 12;
      this.body.right = 0;
      this.crshowVerticalStepper = true;
    }//sm
    else if (wdwidth < 830 && wdwidth >= 730) {
      this.body.left = 0;
      this.body.center = 12;
      this.body.right = 0;
      this.crshowVerticalStepper = true;
    }//xs2
    else if (wdwidth < 730 && wdwidth >= 577) {
      this.body.left = 0;
      this.body.center = 12;
      this.body.right = 0;
      this.crshowVerticalStepper = true;
    }//xs1
    else if (wdwidth < 577 && wdwidth >= 484) {
      this.body.left = 0;
      this.body.center = 12;
      this.body.right = 0;
      this.crshowVerticalStepper = true;
    }//xs
    else if (wdwidth >= 100 && wdwidth < 484) {
      this.body.left = 0;
      this.body.center = 12;
      this.body.right = 0;
      this.crshowVerticalStepper = true;
    }

  }

  isVerticalStepper(){
   return this.crshowVerticalStepper;
  }


  constructor(){
    setTimeout(() => {
          this.showBranchForm();
        }, 310);
    this.onResize(innerWidth);
  }


}
