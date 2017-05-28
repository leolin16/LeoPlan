import { Component, OnInit } from '@angular/core';
// import { Component, Input, OnInit } from '@angular/core';
// import { ActivatedRoute, Params }   from '@angular/router';
// import { Location }                 from '@angular/common';
import { pageTransition } from '../animations';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
  animations: [ pageTransition ]
})
export class ExamplesComponent implements OnInit {

  state: string = 'in';

  constructor(
    // private route: ActivatedRoute,
    // private location: Location
  ) { }

  ngOnInit() {
    this.state = (this.state === 'in' ? 'out' : 'in');

  }


}
