import { Component, ViewEncapsulation, trigger, state, style, transition, animate, keyframes, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  encapsulation: ViewEncapsulation.Emulated,
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.scss'],
})
export class AppNavComponent {
  // title = 'app works!';
  state: string = 'inactive';
  // itemState: string ='inactive';
  menuState: string ='collapsed';

  windowWidth: number = 0;


}
  
