import {Component} from 'angular2/core';
import {NaviService} from './navi.service';

@Component({
    selector: 'ss-navi-top',
    template: `
        <div *ngFor="#item of navi; #i = index" (click)="onNavi(0, i)"
            (click)="onNavi(0, i)" 
            [class.is-active]="i == curNaviIdx[0]"> 
            
                <a href="/#/{{item.page}}/{{item.sub[0].page}}">{{item.name}}</a>
        </div>
    `
})

/*
   DOING THIS: 
   
    export class NaviTopComponent extends NaviService  { }
   
   ...DOES NOT WORK, WHY?
   
   It creates a new instance of NaviService instead of using the one provided
   in app.component. It works when you repeat everything like this:

*/

export class NaviTopComponent {
    private navi: any[];
    private curNaviIdx: number[];
    private linkRoot: string;

    constructor(private naviService: NaviService) { }

    ngOnInit() {

        this.navi = this.naviService.navi;
        this.curNaviIdx = this.naviService.curNaviIdx;
        this.linkRoot  = this.naviService.linkRoot;
    }
    onNavi(level: number, idx: number) {
        
        this.curNaviIdx = this.naviService.onNavi(level, idx);
    }
}
