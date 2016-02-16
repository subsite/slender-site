import {Component} from 'angular2/core';
import {NaviService} from './navi.service';

@Component({
    selector: 'ss-navi-left',
    template: `
        <div *ngFor="#item of navi[curNaviIdx[0]].sub; #i = index" 
            (click)="onNavi(1, i)" 
            [class.is-active]="i == curNaviIdx[1]">

            <a href="{{linkRoot}}#/{{navi[curNaviIdx[0]].page}}/{{item.page}}">{{item.name}}</a>
        </div>
    `
})

export class NaviLeftComponent {
    private navi: any;
    private linkRoot: string;
    private curNaviIdx: number[];

    constructor(private naviService: NaviService) { }

    ngOnInit() {

        this.navi = this.naviService.navi;
        this.linkRoot = this.naviService.linkRoot;
        this.curNaviIdx = this.naviService.curNaviIdx;
    }
    onNavi(level: number, idx: number) {
        
        this.curNaviIdx = this.naviService.onNavi(level, idx);
    }
}