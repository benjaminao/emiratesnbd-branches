import { Component, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('divBranch', [
      state('one', style({
        'background-color': 'white',
        transform: 'translateY(0) scale(0.4)'
      })),
      state('two', style({
        'background-color': 'white',
        transform: 'translateY(300px) scale(0.5)'
      })),
      state('three', style({
        'background-color': 'white',
        transform: 'translateY(500px) scale(1)'
      })),
      state('four', style({
        'background-color': 'white',
        transform: 'translateY(0px) scale(1)'
      })),
      transition('one => two', [
        animate(300,style({
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
  stateBt = 'one';
  crbranchTypeShow = false;


  showBranchForm(){
    console.log("showBranchForm");
    this.state == 'one' ? this.state = 'two' : this.state = 'one';
     setTimeout(() => this.state = 'three', 250);

  }
  showBranchNextForm(){
    console.log("showBranchNextForm");
    this.state == 'three' ? this.state = 'four' : this.state = 'three';
     setTimeout(() => {//this.state = 'one';
                       this.crbranchTypeShow = true;
                       this.showBranchForm();
                     }, 210);
    // setTimeout(() => {
    //     this.branchTypeShow = true;
    //     this.state = 'three', 800
    //   });



  }


}
