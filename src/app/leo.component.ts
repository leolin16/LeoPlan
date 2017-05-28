import { Component, trigger, state, style, transition, animate, keyframes, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './leo.component.html',
  styleUrls: ['./leo.component.scss'],
  animations: [
    trigger('showhideMenu', [
      state('collapsed', style({
        transform: 'scaleY(0)'
      })),
      state('expanded', style({
        transform: 'scaleY(1)'
      })),
      transition('collapsed <=> expanded', animate('500ms ease-in-out'))
    ]),
    trigger('focusPanel', [
      state('inactive', style({
        transform: 'scale(1)'
      })),
      state('active', style({
        transform: 'scale(1.04)'
      })),
      transition('inactive => active', animate('500ms ease-in')),
      transition('active => inactive', animate('500ms ease-out'))
    ]),
    trigger('note', [
      state('inactive', style({
        opacity: 0
      })),
      state('active', style({
        opacity: 1
      })),
      transition('inactive => active', [
        animate(300, keyframes([
          style({opacity: 0, transform: 'translateY(0)', offset:0}),
          style({opacity: 1, transform: 'translateY(-15px)', offset:0.6}),
          style({opacity: 1, transform: 'translateY(0)', offset:1})
        ]))
      ]),
      transition('active => inactive', [
        animate(300, keyframes([
          style({opacity: 1, transform: 'translateY(0)', offset:0}),
          style({opacity: 1, transform: 'translateY(-15px)', offset:0.7}),
          style({opacity: 0, transform: 'translateY(100%)', offset:1})
        ]))
      ])
    ]),
    trigger('itemEnter', [
      state('in', style({transform: 'translateY(0)'})),

      transition('void => *', [
        style({transform: 'translateY(-100%)', opacity:0}),
        animate('300ms ease-out')
      ]),
      transition('* => void', [
        // style({transform: 'translateY(-100%)', opacity:0}),
        animate('300ms ease-out', style({transform: 'scaleY(0) translateY(200px)'}))
      ])
    ]),
    trigger('itemEdit', [
      state('inactive', style({transform: 'translateY(0)'})),

      transition('inactive => active', [
        animate('1000ms ease-in-out', style({backgroundColor: '#ff3a89'}))
      ]),
      transition('active => inactive', [
        // style({transform: 'translateY(-100%)', opacity:0}),
        animate('1000ms ease-in-out', style({backgroundColor: 'teal'}))
      ])
    ])
  ]
})
export class LeoComponent {
  // title = 'app works!';
  state: string = 'inactive';
  // itemState: string ='inactive';
  menuState: string ='collapsed';

  windowWidth: number = 0;

  ourItems = [
    ['Shanghai => Nagoya', 'edited', 'path'],
    ['Airport => Hotel', 'edited', 'path'],
    ['Hotel Trusty in Nagoya', 'edited', 'path']
  ]

  menuItemsSrc = [
    ['How-to', 'howto'],
    ['Show Project Details','examples'],
    ['What the Fuck','Yeah?']
  ]

  menuItems = []


  // ourColors = [
  //   'edited',
  //   'edited',
  //   'edited'
  // ]


  toggleFocus() {
    this.state = (this.state === 'inactive' ? 'active' : 'inactive');
  }

  fullfillMenu() {
    if (this.menuState === 'collapsed') {
      this.menuItems.splice(0, this.menuItems.length);
    } else {
      for(var k=0;k<this.menuItemsSrc.length;k++) {
        this.menuItems.push(this.menuItemsSrc[k]);
      }
      // this.menuItems.push(this.menuItemsSrc);
    }
  }

  toggleMenu() {
    this.menuState = (this.menuState === 'collapsed' ? 'expanded' : 'collapsed');
    this.fullfillMenu();
  // console.log(document.documentElement.clientWidth);
  }

  submitItem(event) {
    if (event.target.value.length !== 0) {
      this.ourItems.push([event.target.value, 'edited']);
      // this.ourColors.push('edited');
      // console.log(this.ourItems);
    }
    event.target.value = '';
  }
  removeItem(event, i) {
    this.ourItems.splice(i, 1);
    // console.log(this.ourItems);
    // this.ourColors.splice(i, 1);
    // event.target.value = '';
  }
  changeIdentifierColor(event, i) {
    // console.log(event);

    // event.target.parentElement.previousElementSibling.addClass('editing');
    this.ourItems.forEach(function(value, index, array) {
      array[index][1] = 'edited';
    });

    this.ourItems[i][1] = 'editing';

    // this.itemState = (this.itemState === 'inactive' ? 'active' : 'inactive' );
  }

  closeMenu() {
    if(document.documentElement.clientWidth > 800) {
      //do nothing
    } else {
      this.menuState = 'collapsed';
      this.fullfillMenu();
    }
  }

  onLoad(event) {
    this.windowWidth = event.target.documentElement.clientWidth;
    if(event.target.documentElement.clientWidth > 800) {
      this.menuState = 'expanded';
      this.fullfillMenu();
    } else {
      this.menuState = 'collapsed';
      this.fullfillMenu();
    }
  }

  onResize(event) {
    
    if( event.target.innerWidth > 800 && this.windowWidth <= 800 && this.menuState === 'collapsed' ) {
      this.menuState = 'expanded';
      this.fullfillMenu();
    } else if( event.target.innerWidth <= 800 && this.windowWidth > 800 && this.menuState ==='expanded' ) {
      this.menuState = 'collapsed';
      this.fullfillMenu();
    } else {
      //do nothing
    }
    this.windowWidth = event.target.innerWidth;
  }

}
  

  // $(window).resize(function(){
  //   console.log(document.documentElement.clientWidth);
  // });

// additional
