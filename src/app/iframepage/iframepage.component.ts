// import { Component, OnInit } from '@angular/core';
import { Component, OnInit, OnDestroy } from '@angular/core';
// import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { pageTransition } from '../animations';

import 'rxjs/add/operator/switchMap';
import {Subscription} from "rxjs/Rx";

// import {DomSanitizationService} from '@angular/platform-browser';
import {DomSanitizer} from '@angular/platform-browser';  

@Component({
  selector: 'app-iframepage',
  templateUrl: './iframepage.component.html',
  styleUrls: ['./iframepage.component.scss'],
  animations: [ pageTransition ]
})
export class IframepageComponent implements OnInit, OnDestroy {

  state: string = 'in';
  ifpurl: string = 'https://muses.live/';
  starttime: string = '';
  endtime: string = '';

  urls = [
    ['//www.google.cn/maps/embed?pb=!1m28!1m12!1m3!1d5721928.293211265!2d127.3349347274546!3d33.61728962793054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e4!4m5!1s0x35ad8fdbaa218ff5%3A0xdbc17d4daa1b33ef!2z5LiK5rW35biC5rWm5Lic5paw5Yy65LiK5rW35rWm5Lic5Zu96ZmF5py65Zy65rWm5Lic5py65Zy6VDLoiKrnq5nmpbwg6YKu5pS_57yW56CBOiAyMDEyMDI!3m2!1d31.149880999999997!2d121.802262!4m5!1s0x60047d8e11d6d945%3A0xdf2836921a82ba79!2z5pel5pys5oSb55-l55yM5bi45ruR5biC44K744Oz44OI44Os44Ki77yR5LiB55uu5Lit6YOo5Zu96Zqb56m65riv6aeF!3m2!1d34.859257!2d136.816383!5e0!3m2!1szh-CN!2scn!4v1489416999579', '2017-03-18 10:20', '2017-03-18 13:40'],
    ['//www.google.cn/maps/embed?pb=!1m28!1m12!1m3!1d209126.47886954094!2d136.72404604229965!3d35.01668606560745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x60047d8e11d6d945%3A0xdf2836921a82ba79!2z5pel5pys5oSb55-l55yM5bi45ruR5biC44K744Oz44OI44Os44Ki77yR5LiB55uu5Lit6YOo5Zu96Zqb56m65riv6aeF!3m2!1d34.859257!2d136.816383!4m5!1s0x6003772a7862e463%3A0xb572fdee19452873!2sHotel+Trusty+Nagoya+Sakae%2C+3-15-21+Nishiki%2C+Naka+Ward%2C+Nagoya%2C+Aichi+Prefecture+460-0003%E6%97%A5%E6%9C%AC!3m2!1d35.1709981!2d136.9073901!5e0!3m2!1szh-CN!2scn!4v1489417803481', '2017-03-18 14:20', '2017-03-20 15:00'],
    ['//www.google.cn/maps/embed?pb=!1m18!1m12!1m3!1d3261.4229141753567!2d136.90526551551292!3d35.17101041539113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600370d4216ae2cf%3A0xee7a3d548b0ab709!2sHotel+Trusty+Nagoya+Sakae%2C+3+Chome-15-21+Nishiki%2C+Naka-ku%2C+Nagoya-shi%2C+Aichi-ken+460-0003%2C+Japan!5e0!3m2!1sen!2scn!4v1489418358207', '2017-03-18 15:00', '2017-03-20 11:00']
  ]


// leo
  private sub : Subscription;
// end leo

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.state = (this.state === 'in' ? 'out' : 'in');
// leo
    this.sub = this.route.params.subscribe(params => {
            console.log(params['ifpurl']); //{ id : "xx" }
            this.ifpurl = this.urls[params['ifpurl']][0];
            this.starttime = this.urls[params['ifpurl']][1];
            this.endtime = this.urls[params['ifpurl']][2];
            console.log(this.ifpurl);
        });
// end leo
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
